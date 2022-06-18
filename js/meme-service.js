'use strict'
var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

var gImgs;

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
    {
    txt: 'Enter Text',
    size: 20,
    align: 'left',
    color: '#000000',
    fillColor: '#FFFFFF',
    font: 'verdana',
    },
    {
        txt: 'Enter Text',
        size: 20,
        align: 'left',
        color: '#000000',
        fillColor: '#FFFFFF',
        font: 'verdana',
    }
    ]
}


function setImg(id) {
    gMeme.selectedImgId=id
    renderMeme(id, 'change')
}

function getMeme(memeId, isChange=null) {
    
    var index = gImgs.findIndex(img => img.id == memeId);
    gMeme.selectedImgId = memeId
    if(isChange) {

        gMeme.lines.forEach(function(line){
            line.txt = 'Enter Text'
            line.size = 20
            line.color = '#000000'
            line.fillColor ='#FFFFFF'
            line.font = 'verdana'
        })
        changeLineDef()
        
        var elInput = document.getElementById('txtChange')
        elInput.value = ''
    }
    drawDataURIOnCanvas(gImgs[index].url)
    setTimeout(drawText,1)
}

function drawDataURIOnCanvas(strDataURI) {
    "use strict"
    var img = new window.Image();
    console.log(strDataURI);
    img.setAttribute("src", strDataURI);
    var canvas = gElCanvas ;
   var hRatio = canvas.width /img.width    ;
   var vRatio =  canvas.height/img.height  ;
   var ratio  = Math.min ( hRatio, vRatio );
   var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
   var centerShift_y = ( canvas.height - img.height*ratio ) / 2;  
   gElCtx.clearRect(0,0,canvas.width, canvas.height);

   img.addEventListener("load", function () {
        gElCtx.drawImage(img, 0,0, img.width, img.height,centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);
})

}

function drawText() {
    
    for(var i=0; i<gMeme.lines.length; i++) {
        var style = gMeme.lines[i]
        gElCtx.font = `${style.size}px ${style.font}`;
    
        gElCtx.lineWidth = 2;
        gElCtx.strokeStyle = style.color
        gElCtx.fillStyle = style.fillColor
        if(i===0) {
            if(i===gMeme.selectedLineIdx) {
                drawShadow()
            }
            gElCtx.strokeText(style.txt, 160, 30);
            gElCtx.shadowBlur=0;
            gElCtx.fillText(style.txt, 160, 30);
        } else {
            if(i===gMeme.selectedLineIdx) {
                drawShadow()
            }
            gElCtx.strokeText(style.txt, 160, 370);
            gElCtx.shadowBlur=0;
            gElCtx.fillText(style.txt, 160, 370);
        }

    }
}

function setLineText(txt, ev){
    ev.preventDefault()

    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    getMeme(gMeme.selectedImgId)
}

function changeFont(font, ev) {
    ev.preventDefault()
    gMeme.lines[gMeme.selectedLineIdx].font = font;
    getMeme(gMeme.selectedImgId)
}

function setColor(clr, ev,isStroke) {
    ev.preventDefault()

    if(isStroke) gMeme.lines[gMeme.selectedLineIdx].color = clr;
    if(!isStroke) gMeme.lines[gMeme.selectedLineIdx].fillColor = clr;
    getMeme(gMeme.selectedImgId)
}

function setFontSize(val,ev) {
    ev.preventDefault()

    gMeme.lines[gMeme.selectedLineIdx].size = val
    getMeme(gMeme.selectedImgId)
}

function switchLine(e) {
    e.preventDefault()
    var gMemeLinesNum = gMeme.lines.length
    if(gMeme.selectedLineIdx+1<gMemeLinesNum) {
        gMeme.selectedLineIdx++
    } else {
        gMeme.selectedLineIdx=0
    }
    
    changeLineDef()
    getMeme(gMeme.selectedImgId)
}

function createGImgs(gImgsValues){
    gImgs = gImgsValues
}

function changeLineDef(){
    var lineStyle = gMeme.lines[gMeme.selectedLineIdx] 

    var elInput = document.getElementById('txtChange')
    if(lineStyle.txt!=='Enter Text') elInput.value = lineStyle.txt
    if(lineStyle.txt==='Enter Text') elInput.value = ''

    var elFont = document.getElementById('font-selection')
    elFont.value = lineStyle.font

    var elColor = document.getElementById('stroke-clr')
    elColor.value = lineStyle.color

    var elFillColor = document.getElementById('fill-clr')
    elFillColor.value = lineStyle.fillColor

    var elSize = document.getElementById('font-size')
    elSize.value = lineStyle.size
}

function drawShadow() {
    
    gElCtx.shadowColor="yellow";
    gElCtx.shadowBlur=20;

}

function downloadCanvas(elLink) {
    var copyCanvs = gElCanvas
    const data = copyCanvs.toDataURL()
    
    elLink.href = data
    elLink.download = 'myMeme'
}