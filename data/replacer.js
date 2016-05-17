const replMap = {
    "Artur Maia": "Tuca",
    "Daniel Almeida": "Comuna",
    "Eduardo Cunha": "Carangueijo",
    "Eduardo Paes": "Nervosinho",
    "Edvaldo Brito": "Candomblé",
    "Fabio Branco": "Colorido",
    "Geraldo Julio": "Neto",
    "Humberto Costa": "Drácula",
    "Jacques Wagner": "Passivo",
    "Jarbas Vasconcelos Filho": "Viagra",
    "Jarbas Vasconcelos": "Viagra",
    "Jorge Picciani": "Grego",
    "José Fortunati": "Rico",
    "José Sarney": "Escritor",
    "Lindberg Farias": "Lindinho",
    "Lindbergh Farias": "Lindinho",
    "Manuela D'Ávila": "Avião",
    "Marcelo Nilo": "Rio",
    "Marconi Perillo": "Caseiro",
    "Mário Kertesz": "Roberval",
    "Paulo Magalhães": "Goleiro",
    "Raimundo Colombo": "Ovo",
    "Randolfe Rodrigues": "Múmia",
    "Raul Jungmann": "Bruto",
    "Renan Calheiros": "Atleta",
    "Romero Jucá": "Cacique",
    "Jucá": "Cacique",
    "Sérgio Cabral": "Proximus",
    "Silval Barbosa": "Boiadeiro",
    "Teotônio Vilela Filho": "Manso",
    "Vanessa Grazziotin": "Ela",
}
const regex = new RegExp(Object.keys(replMap).join("|"), "gi")

const walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false)
while (walk.nextNode()) {
    const node = walk.currentNode
    node.nodeValue = node.nodeValue.replace(regex, match => replMap[match])
}
