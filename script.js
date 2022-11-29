window.onload = function() {
	//establish whether device viewing page is mobile or desktop
	if(window.innerWidth >= 1024) {
		document.getElementById("desktopMain").hidden = false;
		document.getElementById("mobileMain").hidden = true;
	} else {
		document.getElementById("desktopMain").hidden = true;
		document.getElementById("mobileMain").hidden = false;
	}

	
	

	//Code for navigation accordion on mobile version
	document.getElementsByTagName('nav')[0].style.maxHeight = "0px";

	document.getElementById('hamburger').addEventListener("click", function() {
		if(document.getElementsByTagName('nav')[0].style.maxHeight == "0px")
			document.getElementsByTagName('nav')[0].style.maxHeight = document.getElementsByTagName('nav')[0].scrollHeight + "px";
		else
			document.getElementsByTagName('nav')[0].style.maxHeight = "0px";
	});






	//Code for the accordion on FAQ page
	for (let i = 0; i < 8; i++) {
		//set height of all accordion panels to 0
		document.getElementsByClassName('panel')[i].style.maxHeight = "0px";


		//establish event listener for click
		document.getElementsByClassName('accordion')[i].addEventListener("click", function() {
			
			//expand panel if collapsed
			if(document.getElementsByClassName('panel')[i].style.maxHeight == "0px") {
				document.getElementsByClassName('panel')[i].style.maxHeight = document.getElementsByClassName('panel')[i].scrollHeight + "px";
				document.getElementsByClassName('accordion')[i].classList.add("active");

				//and collapse all other panels
				for (let j = 0; j < 8; j++) {
					if (j != i) { 
						document.getElementsByClassName('panel')[j].style.maxHeight = "0px"
						document.getElementsByClassName('accordion')[j].classList.remove("active");
					}
				}
			}
			//collapse panel if expanded
			else {
				document.getElementsByClassName('panel')[i].style.maxHeight = "0px";
				document.getElementsByClassName('accordion')[i].classList.remove("active");
			}
		});
	}
};















//code for the cart
function loadCart() {
	window.location = "cart.html";
}











//Make the search box actually query Google
function mobileQuery() {
	window.location = "https://www.google.com/search?q=" + document.getElementById("searchField").value;
}

function desktopQuery() {
	window.location = "https://www.google.com/search?q=" + document.getElementById("desktopSearchField").value;
}








//switch between mobile or desktop main sections on resize
window.onresize = function() {
	if(window.innerWidth >= 1024) {
		document.getElementById("desktopMain").hidden = false;
		document.getElementById("mobileMain").hidden = true;
	} else {
		document.getElementById("desktopMain").hidden = true;
		document.getElementById("mobileMain").hidden = false;
	}
};