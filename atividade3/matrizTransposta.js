function Transpor(A){
    let string = '';
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[i].length; j++){
            string += A[i][j] + ' ';
        }
        string += '\n';
    }
    console.log(string);

    let matrizTransposta = '';
    for(let j = 0; j < A[0].length; j++){
        for(let i = 0; i < A.length; i++){
            matrizTransposta += A[i][j] + ' ';
        }
        matrizTransposta += '\n';
    }
    console.log(matrizTransposta);

}

const A = [
            [1, 2], 
            [3, 4], 
            [5, 6]
        ];

Transpor(A);
