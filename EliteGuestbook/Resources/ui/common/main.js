/**
 * @author Deeson
 */

var win = Ti.UI.currentWindow;

//Sign In Window
var signIn = Ti.UI.createWindow();

//View Book Window
var viewGuestBook = Ti.UI.createWindow();

var signInButton = Ti.UI.createButton({
	title:'Sign In'
});

signInButton.addEventListener('click', function(e){
	win.close();
	signIn.url = 'sign_in.js'
	signIn.open();
}); 

win.add(signInButton);


var viewGuestBookButton = Ti.UI.createButton({
	top:250,
	title:'View Guestbook'
});


win.add(viewGuestBookButton);


