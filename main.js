// import $ from "jquery"
import myObj from "./data.json"

// const headerRow = $("#aR0")[0] // obtenir le véritable élément DOM à partir de sa version jQuery
const headerRow = document.getElementById("aR0")

// refactored
const clicker = (sel, fn) =>
  document.querySelector(sel).addEventListener("click", fn, false)

clicker("a.hideMe", (ev) => {
  ev.preventDefault()
  headerRow.classList.add("is-hidden")
})

clicker("a.showMe", (ev) => {
  ev.preventDefault()
  headerRow.classList.remove("is-hidden")
})

/*
// One by one
document.querySelector('a.hideMe').addEventListener('click', (ev) => {
  ev.preventDefault()
  headerRow.classList.add('is-hidden')
}, false)

document.querySelector('a.showMe').addEventListener('click', (ev) => {
  ev.preventDefault()
  headerRow.classList.remove('is-hidden')
}, false)
*/

/*
// Single handler catches all events
document.addEventListener('click', (ev) => {
  if (!ev.target.classList.contains('hideMe') && !ev.target.classList.contains('showMe')) return
  ev.preventDefault()
  const method = ev.target.classList.contains('hideMe') ? 'add' : 'remove'
  headerRow.classList[method]('is-hidden')
}, false)
*/

/*
$("a.hideMe").click((ev) => {
  ev.preventDefault() // empêcher que le click sur un href change la page
  headerRow.classList.add('is-hidden') // utiliser l'API du DOM pour ajouter la classe bulma .is-hidden
  // $("#aR0").hide()
})

$("a.showMe").click((ev) => {
  ev.preventDefault()
  headerRow.classList.remove('is-hidden')
  // $("#aR0").show()
})
*/

document.getElementById(myObj.nomMachine).innerHTML =
  //"<a href='" + myObj.urlCanonique + "'>" + myObj.nom + "</a>"
  `<a href="${myObj.urlCanonique}">${myObj.nom}</a>`
