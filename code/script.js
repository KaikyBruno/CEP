const addressform = document.getElementById ('address-form')
const cepinput = document.getElementById ('cep')
const ruainput = document.getElementById('rua')
const cidadeinput = document.getElementById ('cidade')
const bairroinput = document.getElementById ('bairro')
const estadoinput = document.getElementById ('estado')
const numberinput = document.getElementById ('number')
const forminput = document.querySelectorAll ("[data-input]")

const closebutton = document.getElementById ('fechar-mensagem')

const fadeelement = document.querySelector ('#fade')

// Deixae só escrever números



cepinput.addEventListener("keypress", (e) => {
    const numbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    if (!numbers.test(key)) {
        e.preventDefault()
        return
    }
})

cepinput.addEventListener ("keyup", (e) => {
    const inputvalue = e.target.value 

    if (inputvalue.length == 8) {
        getendereço (inputvalue)
        
    }
})

const getendereço = async (cep) => {
    toggle()
    cepinput.blur ()

    const apiURL = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch (apiURL)

    const data = await response.json()
    
    console.log (data)

    if (data.erro === true){
        addressform.reset() 
        toggle ()
        togglemensagem ("O CEP digitado está incorreto")
        return
    } 

    inputdisabled ()

    ruainput.value = data.logradouro
    cidadeinput.value = data.localidade
    bairroinput.value = data.bairro
    estadoinput.value = data.uf

    toggle ()

}

const inputdisabled = () => {
    
    if (estadoinput.hasAttribute ("disabled")) {
        forminput.forEach ((input) => {
            input.removeAttribute ("disabled")
        })
    } else {
        forminput.forEach ((input) => {
            input.setAttribute ("disabled", "disabled") 
        }) 
    }
}

const toggle = () => {
    
    const loaderelement = document.querySelector ('#loader')

    fadeelement.classList.toggle('hide')
    loaderelement.classList.toggle('hide')
}

const togglemensagem = (msg) => {
    
    const mensagemelement = document.getElementById ('mensagem')
    const mensagemelementtext = document.getElementById ('mensagem-p')

    mensagemelementtext.innerText = msg 

    fadeelement.classList.toggle("hide")
    mensagemelement.classList.toggle("hide")
}

closebutton.addEventListener ("click", () => {togglemensagem()})