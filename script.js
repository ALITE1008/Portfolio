
function randomcolour() {
    let val1  =Math.random()*250;
    let val2 = Math.random()*220;
    let val3 =Math.random()*210;
    return `rgb(${val1},${val2},${val3})`
}

function cc()
{
    document.getElementById('name').style.color=randomcolour();
    document.getElementById('hi').style.color=randomcolour();
}    

setInterval(cc,2000);
