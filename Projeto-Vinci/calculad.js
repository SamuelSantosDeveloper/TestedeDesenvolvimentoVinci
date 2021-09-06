
$(document).ready(function(){
    $('.editarbotao').on('click', function(){

        
        let valor_digitado = $(this).text()
        let valor_tela = $('#resultado').text()

        if((valor_digitado != '=')){

            if(valor_digitado == 'CE'){
                $('#resultado').text("")
                return
            }
            if(valor_digitado == '√'){
                $('#resultado').text(Math.sqrt(valor_tela).toString())
                return
            }
            if(valor_digitado == '<'){
                let valor_limpado = (valor_tela.substring(0, valor_tela.length - 1))

                $('#resultado').text(valor_limpado)
                return
                
            }

            $('#resultado').text(valor_tela + valor_digitado)

        }  
        else{

            valor_tela = valor_tela.replace("^", "**")

              
            $('#resultado').text(eval(valor_tela).toString())

        }

        
            

    })
    $('#bt-enviar').on('click',function()
{
    let number1 = parseInt($('input#txtn1').val())
    let number2 = parseInt($('input#txtn2').val())
    let operator = $('#operadores').val() 


    if((isNaN (number1) ||  isNaN (number2))){ 
        alert("Não é permitido campos em branco!")
    }else if(operator == '+'){
        let resultado = number1 + number2
        $('#txtresult').val(resultado) 
    }
    else if(operator == '-'){
        let resultado = number1 - number2
        $('#txtresult').val(resultado) 
    }
    else if(operator == '*'){
        let resultado = number1 * number2
        $('#txtresult').val(resultado) 
    }
    else if(operator == '/'){

        if(number2 == 0){
            alert('Não é possível divisão por 0!')
        }else{
            let resultado = number1 / number2
            $('#txtresult').val(resultado)
        }
       
    }else if(operator == '^'){
        let resultado = Math.pow(number1,number2)
        $('#txtresult').val(resultado) 
    }
    

}
)
})


