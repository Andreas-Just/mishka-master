$(function() {

	var navMain = document.querySelector(".main-nav");
	var navToggle = document.querySelector(".main-nav__toggle");

	navMain.classList.remove("main-nav--nojs");

	navToggle.addEventListener("click", function() {
	  if (navMain.classList.contains("main-nav--closed")) {
	    navMain.classList.remove("main-nav--closed");
	    navMain.classList.add("main-nav--opened");
	  } else {
	    navMain.classList.add("main-nav--closed");
	    navMain.classList.remove("main-nav--opened");
	  }
	});

});

//  jQuery с использованием <div>
$.get("img/sprite.svg", function(data) {
  var div = document.createElement("div");
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});
