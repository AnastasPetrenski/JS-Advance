function attachEventsListeners() {
    document.querySelector('#convert').addEventListener('click', onClick);
    
    function onClick(){
        let input = document.querySelector('#inputDistance').value;
        const convertFrom = document.querySelector('#inputUnits').value;
        const convertTo = document.querySelector('#outputUnits').value;
        if (convertFrom == 'km') {
            input = input * 1000;
        } else if (convertFrom == 'cm') {
            input = input / 100;
        } else if (convertFrom == 'mm') {
            input = input / 1000;
        } else if (convertFrom == 'mi') {
            input = input * 1609.34;
        } else if (convertFrom == 'yrd') {
            input = input * 0.9144;
        } else if (convertFrom == 'ft') {
            input = input * 0.3048;
        } else if (convertFrom == 'in') {
            input = input * 0.0254;
        } 

        if (convertTo == 'km') {
            input = input / 1000;
        } else if (convertTo == 'cm') {
            input = input * 100;
        } else if (convertTo == 'mm') {
            input = input * 1000;
        } else if (convertTo == 'mi') {
            input = input / 1609.34;
        } else if (convertTo == 'yrd') {
            input = input / 0.9144;
        } else if (convertTo == 'ft') {
            input = input / 0.3048;
        } else if (convertTo == 'in') {
            input = input / 0.0254;
        } 

        const result = document.querySelector('#outputDistance');
        
        result.value = input;
    }
}