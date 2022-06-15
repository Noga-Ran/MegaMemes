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
    color: 'black'
    },
    {
    txt: 'Enter Text',
    size: 20,
    align: 'left',
    color: 'black'
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
            line.color = 'black'
        })
        
        var elInput = document.getElementById('txtChange')
        elInput.value = ''
    }
    drawDataURIOnCanvas(gImgs[index].url)
    setTimeout(drawText,1)
}

function drawDataURIOnCanvas(strDataURI) {
    "use strict"
    var img = new window.Image();
    img.addEventListener("load", function () {
        gElCtx.drawImage(img, 0, 0);
    });
    img.setAttribute("src", strDataURI);
}

function drawText() {
    
    for(var i=0; i<gMeme.lines.length; i++) {
        var style = gMeme.lines[i]
        gElCtx.font = `${style.size}px Verdana`;
    
        gElCtx.strokeStyle = style.color;
        if(i===0) {
            console.log('1');
            gElCtx.strokeText(style.txt, 200, 50);
        } else {
            gElCtx.strokeText(style.txt, 200, 200);
        }
    }
}

function setLineText(txt, ev){
    ev.preventDefault()

    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    getMeme(gMeme.selectedImgId)
}

function setColor(clr, ev) {
    ev.preventDefault()
    gMeme.lines[gMeme.selectedLineIdx].color = clr;
    getMeme(gMeme.selectedImgId)
}

function setFontSize(val,ev) {
    ev.preventDefault()

    gMeme.lines[gMeme.selectedLineIdx].size = val
    getMeme(gMeme.selectedImgId)
}

function switchLine() {
    var gMemeLinesNum = gMeme.lines.length
    if(gMeme.selectedLineIdx+1<gMemeLinesNum) {
        gMeme.selectedLineIdx++
    } else {
        gMeme.selectedLineIdx=0
    }
    getMeme(gMeme.selectedImgId)
    var elInput = document.getElementById('txtChange')
    elInput.value = ''
}

function createGImgs(gImgsValues){
    gImgs = gImgsValues
}