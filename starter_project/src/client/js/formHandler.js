// Replace checkForName with a function that checks the URL
import { checkForName } from "./nameChecker";
import { isValidUrl } from "./urlChecker";
// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = "http://localhost:8000/api";

const form = document.getElementById("urlForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Get the URL from the input field
  const formText = document.getElementById("name").value;

  // Check if the URL is valid
  if (isValidUrl(formText)) {
    console.log("Submitting Form :", { url: formText });
    sendData({ url: formText }).then(function (res) {
      document.getElementById("polarity").innerHTML =
        "Polarity: " + polarityChecker(res.score_tag);
      document.getElementById(
        "agreement"
      ).innerHTML = `Agreement: ${res.agreement}`;
      document.getElementById(
        "subjectivity"
      ).innerHTML = `Subjectivity: ${res.subjectivity}`;
      document.getElementById(
        "confidence"
      ).innerHTML = `Confidence: ${res.confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    });
  } else {
    alert("Invalid Url, Please check the url and try again");
  }
  // If the URL is valid, send it to the server using the serverURL constant above
}

// Function to send data to the server
const sendData = async (data) => {
  const response = await fetch(serverURL, {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("Error", error);
  }
};

const polarityChecker = (score) => {
  let display;
  switch (score) {
    case "P+":
      display = "strong positive";
      break;
    case "P":
      display = "positive";
      break;
    case "NEW":
      display = "neutral";
      break;
    case "N":
      display = "negative";
      break;
    case "N+":
      display = "strong negative";
      break;
    case "NONE":
      display = "no sentiment";
  }
  return display.toUpperCase();
};
// Export the handleSubmit function
export { handleSubmit };
