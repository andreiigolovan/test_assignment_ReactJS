let imagesLeft = ['-----1.jpg', 'layer-42.jpg'];

let imagesRight = ['-----2.jpg', 'layer-32.jpg', 'layer-33.jpg'];

function leftAdsssInterval() {
    let i = 0;
    let element = document.getElementById('adsss__image_left');
    setInterval(function() {
        element.setAttribute('src', 'img/' + imagesLeft[i]);
        i++;
        if (i > 1) i = 0;
    }, 2500)  
}
leftAdsssInterval();

function rightAdsssInterval() {
    let i = 0;
    let element = document.getElementById('adsss__image_right');
    setInterval(function() {
        element.setAttribute('src', 'img/' + imagesRight[i]);
        i++;
        if (i > 2) i = 0;
    }, 3500)
}
rightAdsssInterval();