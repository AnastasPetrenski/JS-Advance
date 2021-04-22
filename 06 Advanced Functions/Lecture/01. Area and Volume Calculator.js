function solve(area, vol, dataAsJSON){
    return JSON.parse(dataAsJSON).map(fig => ({
        area: area.call(fig),
        volume: vol.call(fig)
    }));
}

const example = `[
    
        {"x":"1","y":"2","z":"10"},
        {"x":"7","y":"7","z":"10"},
        {"x":"5","y":"2","z":"10"}
        
    ]`;

console.log(solve(area, vol, example));

function area(){
    return this.x * this.y;
}

function vol(){
    return this.x * this.y * this.z;
}
