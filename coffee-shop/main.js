import './src/style.scss'
// document.querySelector("#app").innerHTML = ``

const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', _ => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo)
})