chrome.tabs.executeScript(null, {file: "content.js"});
var tab_id = [];
var extra_tabs = [];
var main_tab = 1;

function callClarify(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(main_tab, {cmd: "clarify"}, function(response) {
		});
	});
}

function callCheckAll(id){
	if( localStorage['enable'] === 1 ){
		chrome.tabs.sendMessage(id, {cmd: "checkAll"}, function(response) {});
	}
}

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		switch(request.action) {
			case "callClarify":
				callClarify();
			break;
			case "enable":alert(1)
				localStorage['enable'] = 1;
			break;
			case "disable":alert(0)
				localStorage['enable'] = 0;
			break;
		}
	}
);
chrome.extension.onMessage.addListener(
	function(request, sender, send_response) {
		if (request.cmd == "tab_add") { // Ответ от content.js
			if(main_tab == 0 && tab_id.length == 0){
				main_tab = sender.tab.id;
				alert('main');
			}else{
				extra_tabs.push(sender.tab.id);
				callCheckAll(sender.tab.id);
			}
    		tab_id.push(sender.tab.id);
		}
	}
)
