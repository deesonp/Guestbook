/**
 * @author Deeson
 */

var win = Ti.UI.currentWindow;

var db = Ti.Database.open('guestbookDB');
db.execute('CREATE TABLE IF NOT EXISTS guests(id INTEGER PRIMARY KEY, firstName TEXT, lastName TEXT, email TEXT, phone TEXT,date TEXT,comment TEXT);');
db.close();

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

viewGuestBookButton.addEventListener('click', function(e){
	win.close();
	viewGuestBook.url = 'view_guestbook.js'
	viewGuestBook.open();
});


win.add(viewGuestBookButton);


