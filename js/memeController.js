'use strict'

var gElCanvas;
var gElCtx;

function onSetImg(imgId){
    setImg(imgId)
}

function renderMeme(memeId,isChange) {
    gElCanvas = document.getElementById('my-canvs');
    gElCtx = gElCanvas.getContext('2d');

    getMeme(memeId,isChange)
}

function onSetLineText(text,ev) {
    ev.preventDefault()
    setLineText(text)
}

function onChangeFont(font, ev) {
    ev.preventDefault()
    changeFont(font)
}

function onSetColor(clr, ev, isStrk) {
    ev.preventDefault()
    setColor(clr,isStrk)
}

function onSetFontSize(size, ev){
    ev.preventDefault()
    setFontSize(size)
}

function onSwitchLine(e){
    e.preventDefault()
    switchLine()
}

function onDownloadCanvas(elLink) {
    getMeme(gMeme.selectedImgId,null,elLink)
}

function onShare(){
    getMeme(gMeme.selectedImgId,null,null,'fb')
    getMeme(gMeme.selectedImgId)
}