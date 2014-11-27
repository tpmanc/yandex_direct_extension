var buttonEn = document.getElementById("enable");
var buttonDis = document.getElementById("disable");

buttonEn.addEventListener("click", function() {
    chrome.extension.sendRequest( { action: "enable" } );
    // chrome.extension.sendRequest( { action: "callClarify" } );
});

buttonDis.addEventListener("click", function() {
    chrome.extension.sendRequest( { action: "disable" } );
});