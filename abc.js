// function calculadora(operacao,a,b){
//     switch(operacao){
//         case 'somar':
//             console.log(a+b);
//             break;
//         case 'subtração':
//             console.log(a-b);
//             break;
//         case 'multiplicação':
//             console.log(a*b);
//             break;
//         case 'dividir':
//             console.log(a/b);
//             break;
//         default:
//             console.log(`operação inexistente`);
//             break;
//     }
//     return;
// }

// calculadora("subtração", 10 ,4);
// calculadora("somar", 10 ,4);
// calculadora("multiplicação", 10 ,4);
// calculadora("dividir", 10 ,5);

//exercício 1

function tabuada (b){
    for (a=0; a<11; a+=1){
        soma = b * a;
        console.log (`${b} x ${a} = ${soma}`);
    }
}
tabuada(10);

//exercício 2



function fibonacci(a){
    if (a<2){
        return a;
    } return fibonacci(a-1) + fibonacci(a-2)
}
function quantidade(c) {
    for (b=0;b<c;b++){
        console.log(fibonacci(b));
    }
}     

fibonacci(1);
quantidade(20);

//exercício 3

function tamanho() {
    let lista = ["brr brr patapim","tralalelo tralala","lirili larila","tung tung tung sahur"];
    a = lista.length;
    console.log("\n",a);
}

tamanho();

