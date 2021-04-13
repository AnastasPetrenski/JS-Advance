function print(){
    console.log(`${this.name} is printing a page`);
}

function scan(){
    console.log(`${this.name} is scanning document`);
}

const printer = {
    name: 'Printer',
    print
};

const scanner = {
    name: 'Scanner',
    scan
};

const copier = {
    name: 'Copier',
    print,
    scan
};

console.log(printer);
printer.print();
scanner.scan();
copier.print();
copier.scan();