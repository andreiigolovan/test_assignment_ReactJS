'use strict';

var imagesLeft = ['-----1.jpg', 'layer-42.jpg'];

var imagesRight = ['-----2.jpg', 'layer-32.jpg', 'layer-33.jpg'];

function leftAdsssInterval() {
    var i = 0;
    var element = document.getElementById('adsss__image_left');
    setInterval(function () {
        element.setAttribute('src', 'img/' + imagesLeft[i]);
        i++;
        if (i > 1) i = 0;
    }, 2500);
}
leftAdsssInterval();

function rightAdsssInterval() {
    var i = 0;
    var element = document.getElementById('adsss__image_right');
    setInterval(function () {
        element.setAttribute('src', 'img/' + imagesRight[i]);
        i++;
        if (i > 2) i = 0;
    }, 3500);
}
rightAdsssInterval();
"use strict";

// let react = require('react');
// import ReactDOM from 'react-dom';

function ServiceBlock(props) {
  return React.createElement(
    "a",
    { href: "#", className: "main__service service-main" },
    React.createElement(
      "div",
      { className: "service-main__icon" },
      React.createElement("img", { src: props.src, alt: props.title })
    ),
    React.createElement(
      "h4",
      { className: "service-main__caption" },
      props.title
    )
  );
}

ReactDOM.render(React.createElement(ServiceBlock, { src: "img/shape-72.svg", title: "Web Designers" }), document.getElementById('root'));