'use strict'

function renderGallery() {
    var elGalleryC = document.querySelector('.gallery-container')
    var newHtml=''
    var newImagsValues= []

    for(var i=1; i<=18 ; i++){
        newHtml+=`<div class="div-${i}"><img id="${i}" src="meme-imgs/${i}.jpg" width="250" height="250" onclick="setImg(${i}); hideGallery();"></div>`
        newImagsValues.push({id:`${i}`,url:`meme-imgs/${i}.jpg`})
    }
    elGalleryC.innerHTML = newHtml

    createGImgs(newImagsValues)
}