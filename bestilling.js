function visPris() {
    var pakke = document.getElementById("pakketilbud")
    var pakkePris = pakke.options[pakke.selectedIndex].value 
    var deltakere = document.getElementById("deltakere").value 
    var pris = Number(pakkePris) * Number(deltakere)
    document.getElementById("pris").innerHTML = pris // FIKS: Vises ikke!!
    console.log(pris)
}

function bekreftelse() {
    event.preventDefault() // Gjør at siden ikke refresher når man submitter
    var bekreftelse = document.getElementById("bekreftelse")
    bekreftelse.style.visibility = "visible"
}

function visMail() {
    var mail = document.getElementById("epost").value
    brukermail.innerHTML = mail
}