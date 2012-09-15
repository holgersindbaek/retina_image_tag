if (document.cookie == "") {
	console.log("document cookie before - "+document.cookie);
  document.cookie = 'devicePixelRatio = ' + window.devicePixelRatio;
  console.log("document cookie after - "+document.cookie);
  console.log("widnow device pixel ratio - "+window.devicePixelRatio);
  if (document.cookie != "devicePixelRatio=1") window.location.reload();
}
console.log("test");
console.log(document.cookie);