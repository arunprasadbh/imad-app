console.log('Loaded!');


var imgelement = document.getElementById('madi');

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 10;
    imgelement.style.marginLeft = marginLeft + 'px';
}

imgelement.onclick = function () {
    var interval = setInterval(moveRight, 100);

};
