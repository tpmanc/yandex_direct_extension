var buttonEn = document.getElementById("enable");

chrome.windows.onCreated.addListener(function(window){
	if( localStorage['enable'] == 1 ){
		document.getElementById("enable").classList.add('off');
		if( document.getElementById("enable").classList.contains('on') ){
			document.getElementById("enable").classList.remove('on');
		}
	}else if( localStorage['enable'] == 0 ){
		document.getElementById("enable").classList.add('on');
		if( document.getElementById("enable").classList.contains('off') ){
			document.getElementById("enable").classList.remove('off');
		}
	}else{alert(localStorage['enable']);}
});

buttonEn.addEventListener("click", function() {
	if( document.getElementById("enable").classList[1] == 'on' ){
		document.getElementById("enable").classList.add('off');
		if( document.getElementById("enable").classList.contains('on') ){
			document.getElementById("enable").classList.remove('on');
		}
		chrome.extension.sendRequest( { action: "enable" } );
	}else{
		document.getElementById("enable").classList.add('on');
		if( document.getElementById("enable").classList.contains('off') ){
			document.getElementById("enable").classList.remove('off');
		}
		chrome.extension.sendRequest( { action: "disable" } );
	}
});


window.onload = function(){alert()}
// buttonDis.addEventListener("click", function() {
	
    // chrome.extension.sendRequest( { action: "disable" } );
// });