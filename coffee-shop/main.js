import './src/style.scss'

import { setupCounter } from "./counter.js"

document.querySelector("#app").innerHTML = ``

setupCounter(document.querySelector("#counter"))
