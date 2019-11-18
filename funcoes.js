// Exercicio 1
function equacao2grau() {
    var a = Number(document.all['a'].value);
    var b = Number(document.all['b'].value);
    var c = Number(document.all['c'].value);
    var x1 = 0;
    var x2 = 0;
    var delta = 0;
    var pResposta = document.all['resposta'];
    var pResposta2 = document.all['resposta2'];
    var pResposta3 = document.all['resposta3'];
    
        
    var delta = eval((b*b)-(4*a*c)); // Valor de delta
    var x1 = eval((-1)*b + (Math.sqrt(delta)))/(2*a);    
    var x2 = eval((-1)*b - (Math.sqrt(delta)))/(2*a);  

    if(delta < 0){
        pResposta.innerHTML = "Não é possível calcular pois o Delta é menor que zero.";
    } else if(delta == 0){
        pResposta.innerHTML = "O delta é zero, portando os valores de X1 e X2 serão iguais.";
    } else {

    pResposta.innerHTML = "delta = " + delta;
    pResposta2.innerHTML = "valor do x1 = " + x1;
    pResposta3.innerHTML = "valor do x2 = " + x2;
    
    }
}

// Exercicio 2
function MediaPonderada() {
    var nota1 = Number(document.all['a'].value);
    var nota2 = Number(document.all['b'].value);
    var nota3 = Number(document.all['c'].value);
    var pResposta = document.all['resposta'];
    var pResposta2 = document.all['resposta2'];
    var media;

    media = eval( (nota1 * 2) + (nota2 * 3) + (nota3 * 5) ) / (2 + 3 + 5);

    if (media < 0 ) {
        pResposta.innerHTML = "A média não pode ser menor que zero";
    } else if (media >= 0 && media <= 4.9) {
        pResposta.innerHTML = "A média do aluno é: " + media;
        pResposta2.innerHTML = "Conceito E";
    } else if (media >= 5.0 && media <= 5.9) {
        pResposta.innerHTML = "A média do aluno é: " + media;
        pResposta2.innerHTML = "Conceito D";
    } else if (media >= 6.0 && media <= 6.9) {
        pResposta.innerHTML = "A média do aluno é: " + media;
        pResposta2.innerHTML = "Conceito C";
    } else if (media >= 7.0 && media <= 7.9) {
        pResposta.innerHTML = "A média do aluno é: " + media;
        pResposta2.innerHTML = "Conceito B";
    } else if (media >= 8.0 && media <= 10.0) {
        pResposta.innerHTML = "A média do aluno é: " + media;
        pResposta2.innerHTML = "Conceito A";
    } else {
        pResposta.innerHTML = "A média não pode ultrapassar o valor 10!";
    }
}

// Exercicio 3
function ordemCrescente() {
    var a = Number(document.all['a'].value);
    var b = Number(document.all['b'].value);
    var c = Number(document.all['c'].value);
    var vetor = [a, b, c];
    var VetorCrescente = vetor;
    var pResposta = document.all['resposta'];
    var pResposta2 = document.all['resposta2'];
    var pResposta3 = document.all['resposta3'];

    function crescente (index1, index2){
        return index1 - index2;
    }

    pResposta.innerHTML = "Ordem crescente dos números: " + VetorCrescente.sort(crescente);
}

// Exercicio 4
function calcIdade() {
    var dia = Number(document.all['dia'].value);
    var mes = Number(document.all['mes'].value);
    var ano = Number(document.all['ano'].value);
    var dia1 = Number(document.all['dia1'].value);
    var mes1 = Number(document.all['mes1'].value);
    var ano1 = Number(document.all['ano1'].value);
    var pResp = document.all['resposta'];
    var pResp2 = document.all['resposta2'];

    if (ano > ano1) {
        pResp.innerHTML = "Primeira data: " + dia1 + "/" + mes1 + "/" + ano1 + ".";
        pResp2.innerHTML = "Segunda data: " + dia + "/" + mes + "/" + ano + ".";
    } 
    else if (ano1 > ano) {
        pResp.innerHTML = "Primeira data: " + dia + "/" + mes + "/" + ano + ".";
        pResp2.innerHTML = "Segunda data: " + dia1 + "/" + mes1 + "/" + ano1 + ".";
    } 
    else if (ano == ano1) {
        if (mes > mes1) {
           pResp.innerHTML = "Primeira data: " + dia1 + "/" + mes1 + "/" + ano1 + ".";
           pResp2.innerHTML = "Segunda data: " + dia + "/" + mes + "/" + ano + ".";
        } 
        else if (mes1 > mes) {
            pResp.innerHTML = "Primeira data: " + dia + "/" + mes + "/" + ano + ".";
            pResp2.innerHTML = "Segunda data: " + dia1 + "/" + mes1 + "/" + ano1 + ".";
        } 
        else if (mes == mes1) {
            if (dia > dia1) {
                pResp.innerHTML = "Primeira data: " + dia1 + "/" + mes1 + "/" + ano1 + ".";
                pResp2.innerHTML = "Segunda data: " + dia + "/" + mes + "/" + ano + "."; 
            } 
            else if (dia1 > dia) {
                pResp.innerHTML = "Primeira data: " + dia + "/" + mes + "/" + ano + ".";
                pResp2.innerHTML = "Segunda data: " + dia1 + "/" + mes1 + "/" + ano1 + ".";
            } 
            else if (dia = dia1) {
                pResp.innerHTML = "Datas iguais.";
            }
        }
    }

    
}

function limpar4() {
    document.all['resposta'].innerHTML = "";
    document.all['resposta2'].innerHTML = "";
    document.getElementById('dia').value='';
    document.getElementById('mes').value='';
    document.getElementById('ano').value='';
    document.getElementById('dia1').value='';
    document.getElementById('mes1').value='';
    document.getElementById('ano1').value='';
}


//exercicio 5
function selectOpcao() {
    var opcao = document.all['opcao'].value;
    switch (opcao) {
        case '1':
            var a = +prompt ("Digite um número: ");
            var b = +prompt ("Digite um outro número: ");
            var c = a + b;
            alert("Soma dos numeros: " + c + ".")
            break;
            case '2': 
            var d = prompt ("Digite um número: ");
            var e = Math.sqrt(d).toFixed(2);
            alert ("Raiz: " + e + ".")
            break;
    }
}



//exercicio 8

function fibonacci(quadro,texto)
{
    var num = 0;
    var proximo_num = 1;
    var aux;
    quadro.value = "";

    while ( num <= texto.value )
    {
        quadro.value += num + ", ";
        aux = proximo_num;
        proximo_num = proximo_num + num;
        num = aux;
    }
}

//exercicio 9 

function vinhos() {
    var tinto = Number(document.all['tinto'].value);
    var bran = Number(document.all['bran'].value);
    var ros = Number(document.all['ros'].value);
    var pResposta = document.all['resposta'];
    var pResposta2 = document.all['resposta2'];
    
    
    var soma = tinto + bran + ros;
        if (soma < 50) {
            alert("Está faltando números.")
        } 
        else {
            pResposta.innerHTML = "Porcentagem total de Vinhos:" + "<br> <br>";
            pResposta2.innerHTML = "Vinhos Tinto: " + tinto/0.5 + "%" + "<br>" + "Vinhos Branco : " + bran/0.5 + "%" + "<br>" + "Vinhos Rosê: " + ros/0.5 + "%";
        }
    }


function limpar9() {
    document.all['resposta'].innerHTML = "";
    document.all['resposta2'].innerHTML = "";
    
    document.getElementById('tinto').value='';
    document.getElementById('bran').value='';
    document.getElementById('ros').value='';
}

//exercicio 10

function fat() {
    var inputnum = document.getElementById('num');
    var pResp = document.getElementById('resposta');
    var num = Number(inputnum.value);

      if(num < 0) {
        return 'Valor deve ser maior ou igual a zero';
      
      } 
      else if ((num == 0) || (num == 1) ) {
        return 1;
      } 
      else {
        var cont = 1;
        for (x = num; x > 1; x--) {
          cont = cont * x;
        }
        pResp.innerHTML = "Resultado: " + cont;
      } 
  }


function limpar() {
    document.all['resposta'].innerHTML = "";
    document.all['resposta2'].innerHTML = "";
    document.all['resposta3'].innerHTML = "";
    document.getElementById('a').value='';
    document.getElementById('b').value='';
    document.getElementById('c').value='';
}
