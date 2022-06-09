// Write a function that outputs the transpose of
// a matrix - a new matrix where the columns and rows
// of the original are swapped.

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6]
];
function transpose(matrix) {
    const result = [];
    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[i].length; j++)
            result[j] = [...(result[j] || []), matrix[i][j]];
    return result;
}

console.log(transpose(matrix1));
