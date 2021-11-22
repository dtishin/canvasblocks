
var userName;
var userScore;
var xhttp;
var sheetURL;
var data;

    function start(num1) {
        var x = num1;    
        sheetURL = x;
        post("player", 0);
    }

    function send_name(name){        
        var send = new Google(name);        
    }
   
    function post(name, score){
        
    	userName = name; 
    	userScore = score; 

    	if (window.XMLHttpRequest) {
    	xhttp = new XMLHttpRequest();
        } 
        else {
    	xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhttp.open("GET", sheetURL + "?id=" + userName + "&score=" + userScore , true);
        xhttp.send();
        console.log("send");

        xhttp.onreadystatechange = function () {
            //If we get a successful reply from our spreadsheet:
            if (xhttp.readyState == 4 && xhttp.status == 200) {
            	data = JSON.parse(xhttp.responseText); 
                send_name(data);
            }

        }
    }  

