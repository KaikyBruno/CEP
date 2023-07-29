const cepinput = document.getElementById ('cep')
const encontrarinput = document.getElementById ('encontrar')
const buttonvoltar = document.getElementById ('voltar1')
const buttonvoltarResp = document.getElementById ('resp')
const respcep = document.getElementById ('respcep')
const resplougradouro = document.getElementById ('logradouro')
const respcomplemento = document.getElementById ('complemento')
const respbairro = document.getElementById ('bairro')
const resplocalidade = document.getElementById ('localidade')
const respuf = document.getElementById ('uf')


cepinput.addEventListener ("keypress", (e) => {
    const numbers = /[0-9]/
    const key = String.fromCharCode (e.keyCode)

    if (!numbers.test(key)) {
        e.preventDefault ()
        return
    }
})

async function clicar () {

    event.preventDefault()
    const texterrado = document.getElementById ('errado')

    if (cepinput.value.length == '8') {

        toggle()

        const apiUrl = `https://viacep.com.br/ws/${cepinput.value}/json/`;
        
        const response = await fetch(apiUrl)
        
        const data = await response.json()
        console.log (data)

        toggle()        

        if (data.erro === true) {
           
            mensagem()
        
        } else {
            
            resposta(

                respcep.innerHTML = ` <strong>CEP:</strong> ${data.cep}`,
                resplougradouro.innerHTML = ` <strong>Logradouro:</strong> ${data.logradouro}`,
                respcomplemento.innerHTML = ` <strong>Complemento:</strong> ${data.complemento}`,
                respbairro.innerHTML = ` <strong>Bairro:</strong> ${data.bairro}`,
                resplocalidade.innerHTML = ` <strong>Localidade:</strong> ${data.localidade}`,
                respuf.innerHTML = ` <strong>UF:</strong> ${data.uf}`

                
            )

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

const mensagem = () => {

    const mensagem = document.getElementById ('mensagem')
    mensagem.style.display = 'block'

    
}

const resposta = () => {

    const resp = document.getElementById ('resp')
    resp.style.display = 'block'

    
}

buttonvoltar.addEventListener ("click", () => {

    const mensagem = document.getElementById ('mensagem')
    mensagem.style.display = 'none'
})

buttonvoltarResp.addEventListener ("click", () => {

    const resp = document.getElementById ('resp')
    resp.style.display = 'none'
})


