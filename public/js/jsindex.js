var $win = $(window);
$win.scroll(function() {
	if ($win.scrollTop() > 55) {
		$("nav").addClass("navbarcolor");
	} else {
		$("nav").removeClass("navbarcolor");
	}
});