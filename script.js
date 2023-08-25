function toggleMode() {
    const html = document.documentElement;    

    if(html.classList.contains('light')){ 
        html.classList.remove('light')
    }else {
        html.classList.add('light')
    }
    // tudo do if pode ser simplificado usando apenas html.classList.toggle ('light)

    /* MÉTODO PARA MUDAR IMAGEM AO ATIVAR E DESATIVAR LIGHT 

// pegar a tag img 
const image = document.querySelector("#profile img")
// substituir  a imagem
if(html.classList.contains('light')){ 
 // se tiver light mode adicionar a imagem light (se oculos)
    image.setAttribute("src", "./assets/avatar-light.png")
}else {
// se nao tiver ligh mode, mantem a imagem normal 
image.setAttribute("src", "./assets/avatar.png")

}
*/
}