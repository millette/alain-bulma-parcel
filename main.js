import myObj from "./data.json"

const headerRow = document.getElementById("aR0")

const clicker = (sel, fn) =>
  document.querySelector(sel).addEventListener(
    "click",
    (ev) => {
      ev.preventDefault()
      fn()
    },
    false,
  )

clicker("a.hideMe", (ev) => headerRow.classList.add("is-hidden"))
clicker("a.showMe", (ev) => headerRow.classList.remove("is-hidden"))

document.getElementById(myObj.nomMachine).innerHTML = `<a href="${
  myObj.urlCanonique
}">${myObj.nom}</a>`
