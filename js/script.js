document.getElementById('contact-form').addEventListener('submit', function (event) {
    try {
        event.preventDefault()
        
        const formData = new FormData(event.target)

        const name = formData.get('name')
        if(!name){
            document.getElementById("name-input").focus()
            throw new Error("Campo de Nome é Obrigatório")
        }

        const email = formData.get('email')
        if(!email){
            document.getElementById("email-input").focus()
            throw new Error("Campo de E-mail é Obrigatório")
        }

        const message = formData.get('message')
        if(!message){
            document.getElementById("message-input").focus()
            throw new Error("Campo de Mensagem é Obrigatório")
        }

        alert('✅ Tudo certo! Formulário enviado com sucesso!')
        event.target.reset()
    } catch (error) {
        if(error instanceof Error){
            alert(error.message)
        }else{
            alert("Erro desconhecido")
        }
    }
})
