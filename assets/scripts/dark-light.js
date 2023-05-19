
const rootElement = document.documentElement;
const darkModeElement = document.getElementById("dark-mode");
const lightModeElement = document.getElementById("light-mode");

function setDarkMode(event) {
    /*
        console.log("setTheme", event);
        console.log("mode", "dark-mode");
    */
    rootElement.setAttribute("class", "dark");
    darkModeElement.setAttribute("class", "display-none");
    lightModeElement.setAttribute("class", "");

}

function setLightMode(event) {
    /*
        console.log("setTheme", event);
        console.log("mode", "light-mode");
    */
    rootElement.setAttribute("class", "light");
    lightModeElement.setAttribute("class", "display-none");
    darkModeElement.setAttribute("class", "");

}

darkModeElement.onclick = setDarkMode;
lightModeElement.onclick = setLightMode;
