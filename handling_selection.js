let answers = new Map();
let target = new Map();

initMap();

let savedHtmlFooter = "";
let present = false;

document.addEventListener("keydown", function onPress(e){
	
	if(e.ctrlKey && e.keyCode == 67){		
		getSelectionText();
	}
	
	if(e.ctrlKey && e.keyCode == 190){
		showAnswers();
	}
	
	if(e.ctrlKey && e.keyCode == 188){
		hideAnswers();
	}
	
});

function initMap(){
	answers.set('sadsadsa', 'a');
}

function showAnswers(){
	if(!present){
		document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = savedHtmlFooter;
		present = true;
	}
}

function hideAnswers(){
	if(present){
		savedHtmlFooter = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML;
		document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = "";
		present = false;
	}
}

function getSelectionText() {
	var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
		
	text.replace(/\s+/g, ' ');
	
	console.log(text);
	
	
	answers.forEach((key, value) => {
		if(key.includes(text)){
			target.set(key, value);
		}
	})

	
	createFooter();
	
	clearTarget();
}

function createFooter(){
	present = true;
	document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = "Wow";
}

function clearTarget(){
	target.clear();
}