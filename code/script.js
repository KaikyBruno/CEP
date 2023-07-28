const cepinput = document.getElementById ('cep')
const encontrarinput = document.getElementById ('encontrar')
const voltarmensagem = document.getElementById ('voltar1')


cepinput.addEventListener ("keypress", (e) => {
    const numbers = /[0-9]/
    const key = String.fromCharCode (e.keyCode)

    if (!numbers.test(key)) {
        e.preventDefault ()
        return
    }
})

async function clicar (cep) {
    
    event.preventDefault()
    const texterrado = document.getElementById ('errado')

    if (cepinput.value.length == '8') {
        toggle ()
        const apiUrl = `https://viacep.com.br/ws/${cepinput.value}/json/`;
        
        const response = await fetch(apiUrl)
        
        const data = await response.json()
        
        console.log (data)
        if (data.erro === 'true') {
            
            const mensagem = document.getElementById ('mensagem')

            mensagem.classList.toggle ('none')    

            toggle()
    }

    } else {
        cepinput.style.outline = '1px solid red'
        cepinput.style.border = '1px solid red'
        texterrado.style.display = 'block'
        
    }
}

const toggle = () => {
    const fade = document.getElementById ('fade')
    const toggle = document.getElementById ('toggle')
    const main = document.getElementById ('main')

    
    fade.classList.toggle ('none')
    toggle.classList.toggle ('none')
}

