






Desenvolva um algoritmo que dado três valores distintos,
coloque-os em ordem crescente.



var numero1 = Number(prompt("digite um numero"))
var numemo2 = Number(prompt("digite um numero"))
var numemo3 = Number(prompt("digite um numero")) 

var resultados = [numero1,numemo2,numemo3];

resultados.sort(ordem);

function ordem(a,b){
    return a-b
}

for(var i=0;i<=resultados.length;i++){
    console.log(resultados [i])
}




Desenvolva um algoritmo que dado três valores distintos,
coloque-os em ordem crescente ou decrescente dependendo da
escolha do usuário.



var numero1 = Number(prompt("digite um numero"))
var numemo2 = Number(prompt("digite um numero"))
var numemo3 = Number(prompt("digite um numero")) 

var resultados = [numero1,numemo2,numemo3];

resultados.sort(ordem);

function ordem(a,b){
    return a-b
}

function ordem_2(b,a){
    return b-a
}

for(var i=0;i<=resultados.length;i++){
    console.log(resultados [i])
}

var opcao = Number(prompt("informe a ordem: \n1-crescente \n 2-decrescente"))
if(opcao==1){
    console.log(resultados.sort())
}
if(opcao==2){
    console.log(resultados.reverse())
}


 Construa um algoritmo que calcule a média aritmética de todos
os números pares que forem informados pelo usuário. O valor de
finalização será a entrada do número 0.

var nota1 = Number(prompt("insira o numero"))
var nota2 = Number(prompt("insira o numero"))
var nota3 = Number(prompt("insira o numero"))
var nota4 = Number(prompt("insira o numero"))
var NotaGeral = nota1 + nota2 + nota3 + nota4
var MediaGeral = NotaGeral/4







var i = 0;
var acumulador = 0;

for (i; i < 5; i++) {

    var numero = Number(prompt(" Digite um número de 0 a 5 "))
    if (numero % 2 == 0) {
        (acumulador = acumulador + numero)
    }else{
    console.log("Erro! Número ímpar indentificado")
    }
    console.log(" O valor de numeros acumulados é: " + acumulador)
    }
    console.log("a média artimética é: " + acumulador/5)
    



    
    Construa um algoritmo que efetue a soma de todos os números
    ímpares que são multiplos de três e que se encontram no conjunto
    dos números de 1 até 500.
    

    var x = 0;
    
    while (n < 500) {
      n++;
      x += n;
    }


    var soma = 0

    while (n <= 500){
        if ( n % 2 != 0 && n % 3 == 0){
           console.log(soma = soma + n)
        }
    }


    var soma = 0

Enquanto n <= 500:

       se n mod 2 != 0 e n mod 3 == 0:

               soma = soma + n
       







               var soma = 0;
               for (i = 1; i <= 500; i ++){
                   if ((i % 2! == 0 && i % 3 == 0)){
                        soma + i;
                   }
               }
               console.log("soma + " soma + i)
               







//faça uma função que recebe um array de qualquer tamanho e ordene seus elementos
//na ordem crescente. Faça sua função na mão, não invoque nenhum método de sorting.

// algoritmo de ordenação - bubble sort




            v = [6,4,8,2,7,1] // 6 posições
        indices: 0,1,2,3,4,5    
        for i=0 ate v.tamanho de 1 em 1
            for j=i+1 ate v.tamanho de 1 em 1
               if(v[i] > v[j]) Entao
               aux = v[i]
               v[i] = v[j]
               v[j] = aux
               fim_se
            fim_para
        fim_para

        
      var v = [6,4,8,2,7,1] 
        for (var i = 0; i < v.length; i++){
            for (var j = i+1; j < v.length; j++){
                if(v[i] > v[j]){
                    AUX = v[i]
                    v[i] = v[j]
                    v[j] = AUX
                }
            }
        }
        console.log(v)

        ou
        var v = [3,6,4,8,9,2,7,10,5,1] 
        for (var i = 0; i < v.length; i++){
            for (var j = i+1; j < v.length; j++){
                if(v[i] > v[j]){
                    AUX = v[i]
                    v[i] = v[j]
                    v[j] = AUX
                }
            }
        }
        console.log(v)
      ou

        function bubble_sort(vetor){
            var tamanho = vetor.length
            for(var i=0; i< tamanho; i++){
                for(var j=i+1; j<tamanho; j++){
                    if(vetor[i] > vetor[j]){
                        var aux = vetor[i]
                        vetor[i] = vetor[j]
                        vetor[j] = aux
                    }
                }
            }
            alert(vetor)
        }

        var vet = [3,6,4,8,9,2,7,10,5,1] 
        bubble_sort(vet);


        Lista de Exercício 04
1. Desenvolva um algoritmo que dado três valores distintos,
coloque-os em ordem crescente.

var c = Number(prompt("digite um numero"))
var b = Number(prompt("digite um numero"))
var c = Number(prompt("digite um numero")) 
   
    if(a>b & b>=c){
        console.log(c,b,a)
}
    if(b>=a & b>c & a>=c){
        console.log(c,a,b)
}
    if(b>a & b>=c & a<=c){
        console.log(a,c,b)
}
    if(b>a & b<=c){
        console.log(a,b,c)
}
    if(b<a & a<c){
        console.log(b,a,c)
}
    if(b<c & c<=a){
        console.log(b,c,a)
    }else{
        console.log(a,b,c)
}                       

 








//leia(a,b,c)
//se (a>b)e (b>=c) então
 //  escreva(c,b,a)
senao
 //  se (b>=a)e(b>c)e(a>=c)então
   //   escreva(c,a,
   senao
     // se(b>a)e(b>=c)e(a<=c)então
       //  escreva(a,c,
      senao
        // se (b>a)e(b<=c)então
          //  escreva(a,b,c)
         senao
            //se(b<a)e(a<c)então
              // escreva(b,a,c)
            senao
            //   se(b<c)e(c<=a)então
              //    escreva(b,c,a)
               senao
               escreval(a,b,c)