function takeAllPieces(...input){

    let pieces = input[0];

    let startIndex = pieces.indexOf(input[1]);
    let endIndex = pieces.indexOf(input[2]);
    let result = pieces.slice(startIndex ,endIndex + 1);

    return result;
}

var pieces = takeAllPieces(['Pumpkin Pie', 
'Key Lime Pie', 
'Cherry Pie', 
'Lemon Meringue Pie', 
'Sugar Cream Pie'], 
'Key Lime Pie', 
'Lemon Meringue Pie');

console.log(pieces.join("\n"));