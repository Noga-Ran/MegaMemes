'use strict'

function renderGallery() {
    var elGalleryC = document.querySelector('.gallery-container')
    var newHtml=''
    var newImagsValues= []

    for(var i=1; i<=18 ; i++){
        newHtml+=`<img id="${i}" src="meme-imgs/${i}.jpg" width="100" height="100" onclick="setImg(${i})">`
        newImagsValues.push({id:`${i}`,url:`meme-imgs/${i}.jpg`})
    }
    elGalleryC.innerHTML = newHtml

    createGImgs(newImagsValues)
}