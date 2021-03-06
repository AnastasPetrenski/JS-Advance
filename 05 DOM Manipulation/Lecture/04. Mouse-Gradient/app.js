function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove)
    const output = document.getElementById('result');

    function onMove(event){
        const manualOffsetX = event.pageX - event.target.offsetLeft;
        
        const offsetX = event.offsetX;
        const offsetY = event.target.clientWidth;
        const percent = Math.round(offsetX / offsetY * 100)
        
        output.textContent = `${percent}%`
    }

}