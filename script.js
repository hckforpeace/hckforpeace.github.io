var i =  new Date();


var H = i.getHours();
var M = i.getMinutes();
var d = i.getDate();
var m = i.getMonth()+1;
var y = i.getFullYear();

var TIME = String(H)+':'+String(M);
var TIMEp30 = add30min(M,H);



function add30min(m,h){
    
    
    m = m+30 
    
    if(m>=60){
        m = m - 60;
        h++;
        var TIME = String(m)+':'+String(h);
        return TIME;
    }
    else {
        var TIME = String(h)+':'+String(m);
        return TIME;

    }
    


}


var fulldate = String(d)+"/"+String(m)+"/"+String(y);


window.onload= function() {
    document.getElementById("i3").innerHTML = fulldate
    document.getElementById("i4").innerHTML = fulldate
    document.getElementById("c23").innerHTML = fulldate

    document.getElementById("i5").innerHTML = TIME
    document.getElementById("i6").innerHTML = TIMEp30
    document.getElementById("c24").innerHTML = TIMEp30

}



