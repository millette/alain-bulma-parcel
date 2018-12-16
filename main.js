import $ from "jquery"
import myObj from "./data.json"

$(function() {
  $("a.hideMe").click(function() {
    $("#aR0").hide()
  })
  $("a.showMe").click(function() {
    $("#aR0").show()
  })

  document.getElementById(myObj.nomMachine).innerHTML =
    "<a href='" + myObj.urlCanonique + "'>" + myObj.nom + "</a>"
})
