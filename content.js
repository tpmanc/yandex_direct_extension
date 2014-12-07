// chrome.extension.sendMessage({cmd: "tab_add"}, function(response) {}); // отправляем сообщение ОУМу
chrome.extension.sendMessage({cmd: "checkAllQuery"}, function(response) {});

chrome.extension.onMessage.addListener(actionController);

function actionController(){
	var cmd = arguments[0].cmd;
	if (cmd=="clarify") {
		clarify();
	}else if(cmd=="checkAll"){
		checkAll();
	}
}
// checkAll();
var ind = 0;

/* кнопка уточнить в яндекс директе */
function clarify(){
	var table = document.getElementById("result_table");
	var elems = table.getElementsByClassName("tdata");
	ind = 0;
	clickLink();
	ind++;
	if( ind < elems.length ){
		setTimeout(clickLink, 1100);
	}
}

function checkAll(){
	var checkBtn = document.getElementById("select_all");
	if( checkBtn != undefined ){
		checkBtn.click()
		setTimeout(function(){
			var arr = document.getElementById('footer').getElementsByTagName('input');
			for(var i=0; i<arr.length; i++){
				if( arr[i].value=="Применить" ){
					arr[i].click();
					break;
				}
			}
			setTimeout(function(){
				close();
			}, 300);
		}, 300);
	}else{
		console.log('not found');
	}
}

function clickLink(){
	document.getElementById("ahref_specify_"+ind).click();
}