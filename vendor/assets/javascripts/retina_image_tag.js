if ($.cookie('devicePixelRatio') == "") {
	$.cookie('devicePixelRatio', window.devicePixelRatio, { expires: 360, path: '/'});
  	if ($.cookie('devicePixelRatio') != "1") window.location.reload();
}