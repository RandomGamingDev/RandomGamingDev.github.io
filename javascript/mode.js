var r = document.querySelector(':root');
if (getCookie("darkMode") === null) {
    setCookie("darkMode", String(true), 365);
}

document.addEventListener('DOMContentLoaded', function() {
    RefreshMode();
}, false);

function ReverseMode() {
    darkMode = getCookie("darkMode") == "true" ? true : false;
    setCookie("darkMode", String(!darkMode), 365);
    RefreshMode();
}

function RefreshMode() {
    if (getCookie("darkMode") == "true") {
        r.style.setProperty("--background-color", "black");
        r.style.setProperty("--default-color", "white");
        let darkIcon = document.getElementById("darkIcon");
        if (darkIcon != null)
            darkIcon.style.display = "none";
        let lightIcon = document.getElementById("lightIcon");
        if (lightIcon != null)
            lightIcon.style.display = "block";
        let learnMore = document.getElementById("learnMore");
        if (learnMore != null) {
            document.getElementById("learnMore").classList.remove("btn-light");
            document.getElementById("learnMore").classList.add("btn-dark");
        }
    }
    else {
        r.style.setProperty("--background-color", "white");
        r.style.setProperty("--default-color", "black");
        let darkIcon = document.getElementById("darkIcon");
        if (darkIcon != null)
            darkIcon.style.display = "block";
        let lightIcon = document.getElementById("lightIcon");
        if (lightIcon != null)
            lightIcon.style.display = "none";
        let learnMore = document.getElementById("learnMore");
        if (learnMore != null) {
            document.getElementById("learnMore").classList.remove("btn-dark");
            document.getElementById("learnMore").classList.add("btn-light");
        }
    }
}

function setCookie(name, value, daysToLive) {
    var cookie = name + "=" + encodeURIComponent(value);
    
    if (typeof daysToLive === "number") {
        cookie += "; max-age=" + (daysToLive * 24 * 60 * 60) + ';';
        cookie += "SameSite=Lax;"
        document.cookie = cookie;
    }
}

function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}