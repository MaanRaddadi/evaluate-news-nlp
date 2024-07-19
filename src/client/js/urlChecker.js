function isValidUrl(url){
    let urlRegex  =  /^https:\/\/[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+(\/[a-zA-Z0-9._-]+)*\/?$/;

    if(urlRegex.test(url)){
        return true
    } else {
        return false;
    }
}

export {isValidUrl};