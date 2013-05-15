/**
 * @author Deeson
 */
var forms = require('forms');
var fields = [{
	title : 'First Name',
	type : 'text',
	id : 'firstName'
}, {
	title : 'Last Name',
	type : 'text',
	id : 'lastName'
}, {
	title : 'Email',
	type : 'email',
	id : 'email'
}, {
	title : 'Phone',
	type : 'phone',
	id : 'phone'
}, {
	title : 'Date',
	type : 'date',
	id : 'date'
}, {
	title : 'Please comment here...',
	type : 'comment',
	id : 'comment'

}, {
	title : 'Submit',
	type : 'submit',
	id : 'enterGuest'
}];

var win = Ti.UI.currentWindow;
win.layout = 'vertical';
var signInLabel = Ti.UI.createLabel({
	text : 'Sign the Guestbook',
	font : {
		fontFamily : 'Verdana',
		fontWeight : 'bold',
		fontSize : 16
	},
	color : '#fff',
	top : 10
});

var form = forms.createForm({
	style : forms.STYLE_HINT,
	fields : fields
});

//TODO: separate
form.addEventListener('enterGuest', function(e) {
	var fieldValues = e.values;
	if (fieldValues.firstName != '' && 
		fieldValues.lastName != '' && 
		fieldValues.comment != '' && 
		fieldValues.date != '' &&
		fieldValues.email != '' &&
		fieldValues.phone != '') {
			var userEntry = {
				firstName : fieldValues.firstName,
				lastName : fieldValues.lastName,
				comment : fieldValues.comment,
				date : fieldValues.date,
				email : fieldValues.email,
				phone : fieldValues.phone
			};
			insertUserData(userEntry);

	} else {
		alert("Please fill in all fields");
	}

});

function insertUserData(userEntry){
	var db = Ti.Database.open('guestBookDB');
	db.execute('INSERT INTO guests(firstName, lastName, email,phone,date,comment) VALUES(?,?,?,?,?,?)', 
	userEntry.firstName, userEntry.lastName,userEntry.email,userEntry.phone, userEntry.date, userEntry.comment);
	db.close();
}



win.add(signInLabel);
win.add(form);
win.open();
