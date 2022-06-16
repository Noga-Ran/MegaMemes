'use strict'

function onInit() {
    renderGallery()
}

function displayGallery(){
    var elGallery = document.getElementById('gallery')
    elGallery.style.display = ''
    var elEditor = document.querySelector('.editor')
    elEditor.style.display = 'none'
}

function hideGallery(){
    var elGallery = document.getElementById('gallery')
    elGallery.style.display = 'none'
    var elEditor = document.querySelector('.editor')
    
    elEditor.style.display = 'block'
}