/**
 * @author Deeson
 */
var win = Ti.UI.currentWindow;
win.layout ='vertical';
var viewGuestBookLabel = Ti.UI.createLabel({
	text : 'Guestbook',
	font : {
		fontFamily : 'Verdana',
		fontWeight : 'bold',
		fontSize : 24
	},
	color : '#fff',
	top : 10
});

win.add(viewGuestBookLabel);


var db = Ti.Database.open('guestBookDB');

// create blank table view
var tableview = Titanium.UI.createTableView({
	
});
win.add(tableview);
 
// create an empty array
var data = [];
 
// get a list of all saved items
var rows = db.execute('SELECT firstName, lastName FROM guests');
 
// loop through all items
while (rows.isValidRow())
{
   // add each item to the data array and set the table row title
   data.push({title:rows.field(0)+ ' ' +rows.field(1),hasChild:true,font:{fontSize:24}});
   rows.next();
}
 
// load db data into the table view
tableview.setData(data);
rows.close();

tableview.addEventListener('click', function(e){
	
	if(e.rowData){
		var comment;
		var date;
		var commentAndRow = db.execute('SELECT comment,date FROM guests where (firstName||\' \'|| lastName)=\''+e.rowData.title+'\'');
		if(commentAndRow.isValidRow()){
			comment = commentAndRow.field(0);
			date = commentAndRow.field(1);
		}
		var commentDate = new Date(date);
		var detailWindow = Ti.UI.createAlertDialog({message:comment + '\r\n\r\nSigned on: ' + commentDate.format('dddd, mmmm dd, yyyy.'), title:e.rowData.title,ok:'Okay'}).show();
	}
});



// a global month names array
var gsMonthNames = new Array(
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
);
// a global day names array
var gsDayNames = new Array(
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday'
);
String.prototype.times = function(n)
{
 var s = '';
 for (var i = 0; i < n; i++)
  s += this;

 return s;
}

String.prototype.zf = 
  function(n) { return '0'.times(n - this.length) + this; }
Number.prototype.zf = function(n) { return this.toString().zf(n); }

// the date format prototype
Date.prototype.format = function(f)
{
    if (!this.valueOf())
        return '&nbsp;';

    var d = this;

    return f.replace(/(yyyy|mmmm|mmm|mm|dddd|ddd|dd|hh|nn|ss|a\/p)/gi,
        function($1)
        {
            switch ($1.toLowerCase())
            {
            case 'yyyy': return d.getFullYear();
            case 'mmmm': return gsMonthNames[d.getMonth()];
            case 'mmm':  return gsMonthNames[d.getMonth()].substr(0, 3);
            case 'mm':   return (d.getMonth() + 1).zf(2);
            case 'dddd': return gsDayNames[d.getDay()];
            case 'ddd':  return gsDayNames[d.getDay()].substr(0, 3);
            case 'dd':   return d.getDate().zf(2);
            case 'hh':   return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case 'nn':   return d.getMinutes().zf(2);
            case 'ss':   return d.getSeconds().zf(2);
            case 'a/p':  return d.getHours() < 12 ? 'a' : 'p';
            }
        }
    );
}

win.open();

