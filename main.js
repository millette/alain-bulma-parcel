import myObj from "./data.json"

const elJson = document.getElementById(myObj.nomMachine)
elJson.innerHTML = `<a href="${myObj.urlCanonique}">${myObj.nom}</a>`

const clicker = (sel, fn) =>
  document.querySelector(sel).addEventListener("click", (ev) => {
    ev.preventDefault()
    fn(ev)
  })

const headerRow = document.getElementById("aR0")
clicker("a.hideMe", () => headerRow.classList.add("is-hidden"))
clicker("a.showMe", () => headerRow.classList.remove("is-hidden"))
