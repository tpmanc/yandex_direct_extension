var buttonEn = document.getElementById("enable");

buttonEn.addEventListener("click", function() {
	if( document.getElementById("enable").classList[1] == 'on' ){
		document.getElementById("enable").classList.add('off');
		document.getElementById("enable").value = "Выключить";
		if( document.getElementById("enable").classList.contains('on') ){
			document.getElementById("enable").classList.remove('on');
		}
		chrome.extension.sendRequest( { action: "enable" } );
	}else{
		document.getElementById("enable").classList.add('on');
		document.getElementById("enable").value = "Включить";
		if( document.getElementById("enable").classList.contains('off') ){
			document.getElementById("enable").classList.remove('off');
		}
		chrome.extension.sendRequest( { action: "disable" } );
	}
});

document.addEventListener('DOMContentLoaded', function () {
	if( localStorage['enable'] == 1 ){
		document.getElementById("enable").classList.add('off');
		document.getElementById("enable").value = "Выключить";
		if( document.getElementById("enable").classList.contains('on') ){
			document.getElementById("enable").classList.remove('on');
		}
	}else if( localStorage['enable'] == 0 ){
		document.getElementById("enable").classList.add('on');
		document.getElementById("enable").value = "Включить";
		if( document.getElementById("enable").classList.contains('off') ){
			document.getElementById("enable").classList.remove('off');
		}
	}else{console.log(localStorage['enable']);}
});