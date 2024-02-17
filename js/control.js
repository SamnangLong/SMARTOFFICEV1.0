// Add an event listener to the checkbox
var s1 = document.getElementById('bluetooth');
s1.addEventListener("change", swe1);
function swe1()
{
    if (s1.checked) {
        e1='1';
        console.log('1');
    } else {
        e1='0';
        console.log('0');
    }
    msg_control = 'pub,b1,' + e1 ;
    console.log('Hello');
    publishToMQTT1(msg_control);
}

// Add an event listener to the checkbox
var s2 = document.getElementById('bluetooth2');
s2.addEventListener("change", swe2);
function swe2()
{
    if (s2.checked) {
        e2='1';
    } else {
        e2='0';
    }
    msg_control = 'pub,b2,' + e2 ;
    publishToMQTT2(msg_control);
}

// Add an event listener to the checkbox
var s3 = document.getElementById('bluetooth3');
s3.addEventListener("change", swe3);
function swe3()
{
    if (s3.checked) {
        e3='1';
    } else {
        e3='0';
    }
    msg_control = 'pub,b3,' + e3 ;
    publishToMQTT3(msg_control);
}

// Add an event listener to the checkbox
var s4 = document.getElementById('bluetooth4');
s4.addEventListener("change", swe4);
function swe4()
{
    if (s4.checked) {
        e4='1';
    } else {
        e4='0';
    }
    msg_control = 'pub,b4,' + e4 ;
    publishToMQTT4(msg_control);
}


