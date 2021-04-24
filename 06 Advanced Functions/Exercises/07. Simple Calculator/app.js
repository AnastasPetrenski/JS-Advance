function solve() {
    let select1 = 0;    let select2 = 0;    let resultSelect = 0;
   
    return {
        init: (selector1, selector2, resultSelector) => {
            select1 = document.querySelector(selector1);
            select2 = document.querySelector(selector2);
            resultSelect = document.querySelector(resultSelector);
        },
        add() {
            resultSelect.value = Number(select1.value) + Number(select2.value);
        },
        subtract() {
            resultSelect.value = Number(select1.value) - Number(select2.value);
            return resultSelect;
        }
    }
}

let calc = solve();
calc.init('#num1', '#num2', '#result');
let add = calc.add();
let subtract = calc.subtract();
console.log(subtract)


