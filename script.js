function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    const img = document.querySelector ("#profile img")
    //trocar imagem
    if(html.classList.contains('light')){ 
        img.setAttribute('src', './assets/gatinho-amarelo.png')
        
    } else {
        img.setAttribute('src', './assets/gatinho-amarelo-dark.png')
        


    
    }
 }