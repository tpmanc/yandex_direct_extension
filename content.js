chrome.extension.sendMessage({cmd: "tab_add"}, function(response) {}); // отправляем сообщение ОУМу
chrome.extension.onMessage.addListener(actionController);

function actionController(){
	var cmd = arguments[0].cmd;
	if (cmd=="clarify") {
		clarify();
	}else if(cmd=="checkAll"){
		checkAll();
	}
}
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
	// for(var i=0; i<elems.length; i++){
	// 	document.getElementById("ahref_specify_"+i).click();
	// }
}

function checkAll(){
	document.getElementById("select_all").click();
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
}

function clickLink(){
	document.getElementById("ahref_specify_"+ind).click();
}