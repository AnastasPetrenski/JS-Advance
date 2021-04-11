function diagonals(matrix) {
    let mainDiag = 0;
    let secDiag = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiag += matrix[i][i];
        secDiag += matrix[i][matrix.length - i - 1];
    }

    console.log(mainDiag, secDiag);
};

diagonals([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])

let jaggedArray = [
    [4, 6, 5, 4],
    [13, 2],
    [3, 6, 8],
    [6, 9, 7, 5]
]

for (let row of jaggedArray) {
    console.log(row.join('\t'));
}

/**
 * @param {[]} acc
 * @param {[]} c
 */

function jaggedReducer(acc, c){
    return acc.concat(c);
}

let result = jaggedArray.reduce(jaggedReducer);
console.log(result);