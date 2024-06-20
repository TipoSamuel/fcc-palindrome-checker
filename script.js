// ---------------------  Date  ---------------------

// identifica los elementos del DOM para ser manipulados con JS
const $date = document.querySelector('.footer-box > .footer-box-item:nth-child(2) > span')

// obtener la fecha
const date = new Date()
const day = date.getDate()
let month = date.getMonth() + 1 // añade 1 para obtener el mes a partir de 1 y no de 0
const year = date.getFullYear()

// agrega 0 al inicio del mes en caso de que sea menor a 10
month = month < 10 ? '0' + month : month

// insertar la fecha actual en el DOM
$date.innerHTML = `${day}//<br>${month}//<br>${year}`

