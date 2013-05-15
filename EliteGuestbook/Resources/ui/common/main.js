/**
 * @author Deeson
 */

var win = Ti.UI.currentWindow;

var db = Ti.Database.open('guestbookDB');
db.execute('CREATE TABLE IF NOT EXISTS guests(id INTEGER PRIMARY KEY, firstName TEXT, lastName TEXT, email TEXT, phone TEXT,date TEXT,comment TEXT);');
db.close();


var mainWindowLabel = Ti.UI.createLabel({
	text:'Elite GuestBook',
	color:'white',
	top:200,
	textAlign:'center',
	font: {
		fontWeight:'bold',
		fontSize:24
	},
	height:'auto'
});

win.add(mainWindowLabel);

//Sign In Window
var signIn = Ti.UI.createWindow({
	height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth,
	fullscreen:false,
	navBarHidden:true
});

//View Book Window
var viewGuestBook = Ti.UI.createWindow({
	height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth,
	fullscreen:false,
	navBarHidden:true
});

var signInButton = Ti.UI.createButton({
	title:'Sign In',
	height:'50dp',
	top:330
});

signInButton.addEventListener('click', function(e){
	signIn.url = 'sign_in.js'
	signIn.open();
}); 

win.add(signInButton);


var viewGuestBookButton = Ti.UI.createButton({
	top:250,
	height:'50dp',
	title:'View Guestbook'
});

viewGuestBookButton.addEventListener('click', function(e){
	viewGuestBook.url = 'view_guestbook.js'
	viewGuestBook.open();
});


win.add(viewGuestBookButton);


