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

// ---------------------  Palindrome  ---------------------

// identifica los elementos del DOM para ser manipulados con JS
const $checkButton = document.getElementById('check-btn')
const $palindromeInput = document.getElementById('text-input')
const $result = document.getElementById('result')

// función para validar si el input del usuario es o no un palíndromo
const checkPalindrome = (input) => {
  // almacena el input del usuario
  const originalInput = input

  // comprueba si el usuario realmente ingreso texto en el input
  if (!input) {
    alert('Please input a value')
    return
  }

  // limpia el resultado anterior
  $result.replaceChildren()

  // remueve todos los símbolos de puntuación del string y transforma a minúsculas
  let cleanedString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase()
  // inicializa la variable del mensaje del resultado a mostrar
  let resultMessage

  // comprueba si el string es un palíndromo y devuelve un mensaje con el resultado
  if (cleanedString === [...cleanedString].reverse().join('')) {
    resultMessage = `${originalInput} is a palindrome`
  } else {
    resultMessage = `${originalInput} is not a palindrome`
  }

  // crea un elemento span donde se inserta el mensaje con el resultado
  let spanMessage = $result.appendChild(document.createElement('span'))
  // vuelve el resultado visible en el dom
  $result.style.visibility = 'visible'
  // retorna el mensaje
  return (spanMessage.textContent = resultMessage)
}

// eventos
$checkButton.addEventListener('click', () => {
  checkPalindrome($palindromeInput.value)
  $palindromeInput.value = ''
})

$palindromeInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkPalindrome($palindromeInput.value)
    $palindromeInput.value = ''
  }
})
