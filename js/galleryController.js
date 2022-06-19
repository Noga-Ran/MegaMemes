'use strict'

function renderGallery() {
    var elGalleryC = document.querySelector('.gallery-container')
    var newHtml=''
    var newImagsValues= []

    for(var i=1; i<=18 ; i++){
        newHtml+=`<div class="div-${i}"><img class="gallery-imgs" id="${i}" src="meme-imgs/${i}.jpg" onclick="setImg(${i}); hideGallery();"></div>`
        newImagsValues.push({id:`${i}`,url:`meme-imgs/${i}.jpg`})
    }
    elGalleryC.innerHTML = newHtml

    createGImgs(newImagsValues)
}

function displayGallery(){
    var elGallery = document.getElementById('gallery')
    elGallery.style.display = 'flex'
    var elEditor = document.querySelector('.editor')
    elEditor.style.display = 'none'
    var elAbout=document.getElementById('about')
    elAbout.style.display = ''
}

function hideGallery(){
    var elGallery = document.getElementById('gallery')
    elGallery.style.display = 'none'
    var elEditor = document.querySelector('.editor')
    elEditor.style.display = 'flex'
    var elAbout=document.getElementById('about')
    elAbout.style.display = 'none'
}