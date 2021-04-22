//Immediatly invoked function expression

let result = (
    function() {
        let name = 'Peter';
        return name;
    }
)();

console.log(result);

(function () {let name = 'Peter';})();
console.log(name);