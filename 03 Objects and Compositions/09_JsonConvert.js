let obj = {name: "John", age: 30, city: "Sofia"};
let myJSON = JSON.stringify(obj);
console.log(myJSON);

let arr = ["Nas", "Vas", "Gas"];
let arrJSON = JSON.stringify(arr);
console.log(arrJSON);

let OBJECTS = [{"Name":"Stamat", "Score":5.5},
                {"Name":"Rumen", "Score": 4.5}];
let convert = JSON.stringify(OBJECTS);
console.log(convert);

for (let i = 0; i < OBJECTS.length; i++) {
    var data = Object.values(OBJECTS[i]);
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }    
}

//from string array
function JsonToHTMLTable(input){
   let html= '';
   html += '<table>' + '\n';

   for (let i = 0; i < input.length; i++) {
       let data = JSON.parse(input[i]);
       html += '   <tr>' + '\n';
       let values = Object.values(data);

       for (let i = 0; i < values.length; i++) {
           html+= `     <td>${values[i]}</td>\n`
       }
       html += '   </tr>\n';
   }
   html+='</table>';
    console.log(html);
}

JsonToHTMLTable(['{"Name":"Stamat", "Score":5.5}',
'{"Name":"Rumen", "Score": 4.5}'])

