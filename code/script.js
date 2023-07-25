const cepinput = document.getElementById ('cep')
const encontrarinput = document.getElementById ('encontrar')
const voltar = document.getElementById ('voltar')

cepinput.addEventListener ("keypress", (e) => {
    const numbers = /[0-9]/
    const key = String.fromCharCode (e.keyCode)

    if (!numbers.test(key)) {
        e.preventDefault ()
        return
    }
})


encontrarinput.addEventListener ("click", async(cep) => {
    
    const cepinputValue = cepinput.value

    console.log (cepinputValue)

})