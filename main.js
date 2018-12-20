import myObj from "./data.json"

const headerRow = document.getElementById("aR0")

const clicker = (sel, fn) =>
  document.querySelector(sel).addEventListener(
    "click",
    (ev) => {
      ev.preventDefault()
      fn(ev)
    },
    false,
  )

clicker("a.hideMe", () => headerRow.classList.add("is-hidden"))
clicker("a.showMe", () => headerRow.classList.remove("is-hidden"))

document.getElementById(myObj.nomMachine).innerHTML = `<a href="${
  myObj.urlCanonique
}">${myObj.nom}</a>`
