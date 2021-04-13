function canPrint(device){
    device.print = () => {
        console.log(`${device.name} is printing a page`);
    }
}

const printer = {name: 'Printer'};

canPrint(printer);

printer.print();