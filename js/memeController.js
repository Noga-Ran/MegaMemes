'use strict'

var gElCanvas;
var gElCtx;

function renderMeme(memeId,isChange) {
    gElCanvas = document.getElementById('my-canvs');
    gElCtx = gElCanvas.getContext('2d');

    getMeme(memeId,isChange)
}

