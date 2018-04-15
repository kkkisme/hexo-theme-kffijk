(function() {
	let btn = document.querySelector("#mobile-nav-toggle");
	btn.addEventListener("click", function(e) {
		e.stopPropagation();
		document.body.classList.toggle("mobile-nav-on");
	});
	document.body.addEventListener("click", function(e) {
		document.body.classList.remove("mobile-nav-on");
	});
})();
