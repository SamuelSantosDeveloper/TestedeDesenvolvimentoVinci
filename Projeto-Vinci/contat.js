$(document).ready(function(){
	$('#btn-envio').on('click', function(e){


		let nome = $('input[name="Nome"]').val()
		

		let email = $('input[name="Email"]').val()
		

		let assunto = $('input[name="Assunto"]').val()
		

		let descricao = $('#descricao').val()

		if(nome != '' && assunto != '' && email.includes('@') && email.includes('.com') && descricao != ''){
			let body =`
			Prezado: ${nome}!

			
			${descricao}` 
			
			window.open(`mailto:${email}?subject=${assunto}&body=${body}`);
		}else{
			alert('Dados inválidos!')
		}
		


       

		
	})
    

})
