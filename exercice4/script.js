function checkPass() {
    if ((document.getElementById("capitale3").checked) && (document.getElementById("capital2").checked)) {
        alert("OK");
      }

    else if (document.getElementById("capitale3").checked) {
        alert("FAUX : LA CAPITALE DE L'ITALIE EST ROME !")
    }

    else if (document.getElementById("capital2").checked) {
        alert("FAUX : LA CAPITALE DE LA FRANCE EST PARIS !")
    }

    else {
        alert("FAUX : LA CAPITALE DE LA FRANCE EST PARIS ET LA CAPITALE DE L'ITALIE EST ROME ! ");
      }
}


