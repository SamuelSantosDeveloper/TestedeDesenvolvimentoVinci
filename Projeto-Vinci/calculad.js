
$(document).ready(function(){
     $('#bt-enviar').on('click',function()/*funçao de somar, tem que ser anonima, sem nome, executa direto,  onclick do html evento jquery*/
{
    var number1 = parseInt($('input#txtn1').val())
    var number2 = parseInt($('input#txtn2').val())

    if((isNaN (number1) ||  isNaN (number2))){ /*isNan é uma função que passa numero com parametro, retorna true ou false, verifica se é NaN*/
        alert("Não é permitido campos em branco!")
    }else{
        var resultado = number1 + number2
        $('#txtresult').val(resultado) 
    }

}
)
})



