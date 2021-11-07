function smoothScrollTop(){
    var timer  = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 100;
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }
    });
}
/*

var isOn = false;

function switchFont (){
    let sunIcon = document.getElementById('sunIcon')
    let switchOn = document.getElementById('switchFont')
    if (switchOn.className === "switchOn") {
        switchOn.innerHTML = feather.icons['moon'].toSvg();
        switchOn.className = "switchOff";
        document.documentElement.setAttribute('data-theme', ['dark', 'light'][+isOn]);
        isOn = !isOn;
    } else {
        switchOn.innerHTML = feather.icons['sun'].toSvg();
        switchOn.className = "switchOn";
        document.documentElement.setAttribute('data-theme', ['dark', 'light'][+isOn]);
        isOn = !isOn;
    }
}
*/
