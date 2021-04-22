function solve(string){
    let str = '';

    return {
        append,
        removeStart,
        removeEnd,
        print,
        swap
    }

    function append(string){
        str += string;
    }

    function removeStart(n) {
        str = str.substring(n)
    }

    function removeEnd(n) {
        str = str.substring(0, str.length - n)
    }

    function print(n) {
        console.log(str);
    }

    function swap(n){
        str = str.substring(n, -n)
    }
}

const x = solve();
x.append('Nasko');
x.removeStart(1);
x.removeEnd(1);
x.print();
x.swap(1);
x.print()
