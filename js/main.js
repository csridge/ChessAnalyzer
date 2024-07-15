// remember this is open-source so don't worry if your code has bugs!
let positions = 10; 
let cpuCost = 10; 
let cpuCount = 0; 
let pps = 0; 
let mult = 1;
function updateUI() {
    document.getElementById('positions').innerHTML = `You analyzed ${positions} positions`;
    document.getElementById('pps').innerHTML = `You are analyzing ${pps} positions per second`;
    document.getElementById('mult').innerHTML = `${mult}x`;
    document.getElementById('buycpu').innerHTML = `Buy a CPU for your computer<br>Cost: ${cpuCost}`;
    document.getElementById('cpuCount').innerHTML = `CPU amount: ${cpuCount}`;
}
function buyCPU(){
    if(positions >= cpuCost){
        positions -= cpuCost;
        pps+=1;
        cpuCount+=1;
        cpuCost=Math.floor(cpuCost**1.2)
    }
}
function increment(){
    positions+=pps*mult;
}
function onclick(){
    document.getElementById('buycpu').addEventListener('click', buyCPU, false);
    document.getElementById('booster').addEventListener('click', upgrade, false);
}
setInterval(function gameLoop() {
    updateUI();
    increment();
    onclick();
}, 1000);