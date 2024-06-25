document.addEventListener('DOMContentLoaded', (event) => {
    let positions = 10; 
    let cpuCost = 10; 
    let cpuCount = 0; 
    let pps = 0; 
    let multiplier = 1; 
    let cpuRequires = 10; 
    function updateUI() {
        document.getElementById('positions').innerHTML = `You analyzed ${positions} positions`;
        document.getElementById('pps').innerHTML = `You are analyzing ${pps} positions per second`;
        document.getElementById('mult').innerHTML = `${multiplier}x`;
        document.getElementById('buycpu').innerHTML = `Buy a CPU for your computer<br>Cost: ${cpuCost}`;
        document.getElementById('booster').innerHTML = `Reboot your computer, but your CPus get 2x stronger and CPU requires for next booster will be ^1.4`
        document.getElementById('cpuCount').innerHTML = `CPU amount: ${cpuCount}`;
    }

    function buyCPU(){
        if(positions >= cpuCost){
            positions -= cpuCost;
            pps+=1;
            cpuCount+=1;
        }
    }
    function upgrade(){
        if(cpuCount>=cpuRequires){
            document.getElementById('booster').classList.remove('unclickable');
            cpuCost=Math.round(cpuCost**1.25);
            positions=0;
            multiplier*=2;
            cpuRequires=Math.round(cpuRequires**1.4);
        }
        else{
            document.getElementById('booster').classList.add('unclickable');
        }
    }
    function increment(){
        positions+=pps*multiplier;
    }
    function onclick(){
        document.getElementById('buycpu').addEventListener('click', buyCPU, false);
        document.getElementById('upgradeBtn').addEventListener('click', upgrade, false);
    }
    setInterval(function gameLoop() {
        updateUI();
        increment();
        onclick();
    }, 1000);
})