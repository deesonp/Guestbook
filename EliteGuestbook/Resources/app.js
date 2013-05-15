Titanium.UI.setBackgroundColor('#000000');
var db = Ti.Database.open('guestBookDB');
db.execute('CREATE TABLE IF NOT EXISTS guests(id INTEGER PRIMARY KEY, firstName TEXT, lastName TEXT, email TEXT, phone TEXT, date TEXT, comment TEXT);');
db.close();
var main = Ti.UI.createWindow({
	url:'ui/common/main.js',
	height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth,
	fullscreen:false,
	navBarHidden:true,
	modal:true
});

main.open();
