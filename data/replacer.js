const replMap = {
    "artur maia": "Tuca",
    "daniel almeida": "Comuna",
    "eduardo cunha": "Carangueijo",
    "eduardo paes": "Nervosinho",
    "edvaldo brito": "Candomblé",
    "fabio branco": "Colorido",
    "geraldo julio": "Neto",
    "humberto costa": "Drácula",
    "jacques wagner": "Passivo",
    "jarbas vasconcelos filho": "Viagra",
    "jarbas vasconcelos": "Viagra",
    "jorge picciani": "Grego",
    "josé fortunati": "Rico",
    "josé sarney": "Escritor",
    "lindberg farias": "Lindinho",
    "lindbergh farias": "Lindinho",
    "manuela d'ávila": "Avião",
    "marcelo nilo": "Rio",
    "marconi perillo": "Caseiro",
    "mário kertesz": "Roberval",
    "paulo magalhães": "Goleiro",
    "raimundo colombo": "Ovo",
    "randolfe rodrigues": "Múmia",
    "raul jungmann": "Bruto",
    "renan calheiros": "Atleta",
    "romero jucá": "Cacique",
    "jucá": "cacique",
    "sérgio cabral": "Proximus",
    "silval barbosa": "Boiadeiro",
    "teotônio vilela filho": "Manso",
    "vanessa grazziotin": "Ela",
}
const regex = new RegExp(Object.keys(replMap).join("|"), "gi")

const walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false)
while (walk.nextNode()) {
    const node = walk.currentNode
    node.nodeValue = node.nodeValue.replace(regex, match => replMap[match.toLowerCase()])
}
