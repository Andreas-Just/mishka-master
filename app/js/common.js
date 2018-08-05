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

	var modal = document.querySelector(".modal");
	var overlay = document.querySelector(".overlay");
	var btnProductWeek = document.querySelector(".product-week__btn");
	var btnCatalogItems = document.querySelectorAll(".catalog-item__btn");

	if (btnProductWeek != null) {
	  btnProductWeek.addEventListener("click", function(event) {
	    event.preventDefault();
	    modal.classList.add("modal--show");
	    overlay.classList.add("overlay--show");
	  });
	}

	if (btnCatalogItems.length != 0) {
	  for (var i = 0; i < btnCatalogItems.length; i++) {
	    btnCatalogItems[i].addEventListener("click", function(event) {
	      event.preventDefault();
	      modal.classList.add("modal--show");
	      overlay.classList.add("overlay--show");
	    });
	  }
	}

	if (overlay != null) {
	  overlay.addEventListener("click", function () {
	    if (overlay.classList.contains("overlay--show")) {
	      modal.classList.remove("modal--show");
	      overlay.classList.remove("overlay--show");
	    }
	  });
	}

	window.addEventListener("keydown", function(event) {
	  if (event.keyCode === 27 && modal.classList.contains("modal--show")) {
	    modal.classList.remove("modal--show");
	    overlay.classList.remove("overlay--show");
	  }
	});

	(function(d) {
    var createHelpBlock = function(text) {
      var div = d.createElement('div');
      div.appendChild(d.createTextNode(text));
      div.className = 'help';
      return div;
    },
    elems = d.querySelectorAll('[data-help]');
    [].forEach.call(elems, function(self) {
      self.addEventListener('focus', function() {
        var helpBlock = this._helpBlock || createHelpBlock(this.dataset.help);
        if(!this._helpBlock) {
         this.parentNode.insertBefore(helpBlock, this.nextSibling);
         this.clientHeight;
         this._helpBlock = helpBlock;
       }
       else clearTimeout(this._helpTimeout);
       helpBlock.classList.add('help-show');
     }, true);
      self.addEventListener('blur', function() {
        var self = this;
        this._helpBlock.classList.remove('help-show');
        this._helpTimeout = setTimeout(function() {
          self._helpBlock.remove();
          self._helpBlock = null;
        }, 3E3);
      }, true);
    });
  })(document);

});

//  jQuery с использованием <div>
$.get("img/sprite.svg", function(data) {
  var div = document.createElement("div");
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});
