'use strict';

function solve(){
    let list = [];

    function add(element){
        list.push(element);
        this.size++;
        list.sort((a, b) => a - b);
    }

    function remove(index){
        if (index >= 0 && index < list.length) {
            list.splice(index, 1);
            this.size--;
        }
    }

    function contains(element){
        let value = list.indexOf(element, 0);
        if (value != -1) {
            return true;
        }

        return false;
    }

    function get(index){
        if (index >= 0 && index < list.length) {
            return list[index];
        }
    }

    function getElements(){
        console.log(list.join(' '))
    }

    return {
        size: 0,
        add,
        remove,
        contains,
        get,
        getElements
    }

}

let list = solve();
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.getElements()
console.log(list.contains(4))
list.getElements()
console.log(list.remove(0))
list.getElements()
console.log(list.get(0))
list.getElements()
console.log(list.get(3))
list.getElements()