var borderRadiusBox = document.getElementById('border-radius-box')
var displayChanges = document.getElementById('border-radius-output')
var borderRadiusInputTopLeft = document.getElementById('border-top-left')
var borderRadiusInputTopRight = document.getElementById('border-top-right')
var borderRadiusInputBottomLeft = document.getElementById('border-bottom-left')
var borderRadiusInputBottomRight = document.getElementById('border-bottom-right')

borderRadiusInputTopLeft.addEventListener('keypress', changeBorderRadiusTopLeft)
borderRadiusInputTopRight.addEventListener('keypress', changeBorderRadiusTopRight)
borderRadiusInputBottomLeft.addEventListener('keypress', changeBorderRadiusBottomLeft)
borderRadiusInputBottomRight.addEventListener('keypress', changeBorderRadiusBottomRight)
/*
 ao invés de usar uma tag textarea, 
 usar uma tag select e colocar as tags 'options' dentro do select 
 dinamicamente usando javascript, 
 com os métodos createElement, setAtributte, appendChild, etc... 
*/

function changeBorderRadiusTopLeft(){
    borderRadiusBox.style.borderTopLeftRadius = borderRadiusInputTopLeft.value + 'px'
    let changeData = document.createElement('li')
    displayChanges.appendChild(changeData)
    if(borderRadiusInputTopLeft.value != ''){
        changeData.innerHTML += 'border-radius-top-left: ' + borderRadiusInputTopLeft.value + 'px'
    } else {
        document.removeChild(changeData)
    }
}    
function changeBorderRadiusTopRight(){
    borderRadiusBox.style.borderTopRightRadius = borderRadiusInputTopRight.value + 'px'
    displayChanges.innerHTML += "border-radius-top-right: " + borderRadiusInputTopRight.value + 'px' 
}
function changeBorderRadiusBottomLeft(){
    borderRadiusBox.style.borderBottomLeftRadius = borderRadiusInputBottomLeft.value + 'px'
    displayChanges.innerHTML += "border-radius-bottom-left: " + borderRadiusInputBottomLeft.value + 'px' 
}
function changeBorderRadiusBottomRight(){
    borderRadiusBox.style.borderBottomRightRadius = borderRadiusInputBottomRight.value + 'px'
    displayChanges.innerHTML += "border-radius-bottom-right: " + borderRadiusInputBottomRight.value + 'px' 
}