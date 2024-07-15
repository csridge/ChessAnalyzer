// cpu thing
let cpuRequires = 10;
let boosterCount = 0;
document.getElementById('booster').innerHTML = `Reboot your PC, but your CPU will be 2x stronger and the CPU required for the next booster will be ^1.4.<br>Requires ${boosterCount} CPU`;
document.getElementById('boosterCount').innerHTML = `CPU booster(${boosterCount})`
function upgrade(){
    if(cpuCount>=cpuRequires){
        document.getElementById('booster').classList.remove('unclickable');
        cpuCost=Math.round(cpuCost**1.25);
        positions=0;
        multiplier*=2;
        cpuRequires=Math.round(cpuRequires**1.4);
        boosterCount+=1; 
    }
    else{
        document.getElementById('booster').classList.add('unclickable');
    }
}
//gpu
