function initialize(){
	
	console.log("initialize()");
	var copys = document.getElementsByClassName("copy");
	
	var now = new Date();
	var year = addZero(now.getFullYear(), 2);
	var i = 0;
	
	for (i;i<copys.length;i++){
		
		copys[i].innerHTML= "Copyright: "+year;
		
	}
}
function addZero(x, n) {
                    if (x.toString().length < n) {
                           x = "0" + x;
                    }
                    return x;
}

