function saveload(state) {
    switch(state) {
        case 'save':
            localStorage.setItem('positions', positions);
            localStorage.setItem('cpuCost', cpuCost);
            localStorage.setItem('cpuCount', cpuCount);
            localStorage.setItem('pps', pps);
            localStorage.setItem('mult', mult);
            localStorage.setItem('cpuRequires', cpuRequires);
            localStorage.setItem('boosterCount', boosterCount);
            break;
        case 'load':
            positions = JSON.parse(localStorage.getItem('positions')) || positions;
            cpuCost = Number(localStorage.getItem('cpuCost')) || cpuCost;
            cpuCount = Number(localStorage.getItem('cpuCount')) || cpuCount;
            pps = Number(localStorage.getItem('pps')) || pps;
            mult = Number(localStorage.getItem('mult')) || mult;
            cpuRequires = Number(localStorage.getItem('cpuRequires')) || cpuRequires;
            boosterCount = Number(localStorage.getItem('boosterCount')) || boosterCount;
            break;
        default:
            console.error('Invalid state for saveload(). Use "save" or "load".');
    }
}