var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var button = Ti.UI.createButton();
win.add(button);
win.open();

if (Ti.Platform.name == "android") {
	var android_keyboard = require('com.exygy.showkeyboard');
	button.addEventListener("click", function(e){
		android_keyboard.showKeyboard();
		Ti.API.debug("Keyboard should be displayed.")
	});
}