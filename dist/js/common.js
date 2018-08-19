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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// let react = require('react');
// import ReactDOM from 'react-dom';

function ServiceBlock(props) {
  return React.createElement(
    "a",
    { href: "#", className: "main__service service-main" },
    React.createElement(
      "div",
      { className: "service-main__icon" },
      React.createElement("img", { src: 'img/' + props.src, alt: props.title })
    ),
    React.createElement(
      "h4",
      { className: "service-main__caption" },
      props.title
    )
  );
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return this.props.blocks.map(function (block) {
        return React.createElement(ServiceBlock, { title: block.title, src: block.src });
      });
    }
  }]);

  return App;
}(React.Component);

var data = [{
  title: 'Accountancy',
  src: 'shape-51.svg'
}, {
  title: 'Associations',
  src: 'shape-52.svg'
}, {
  title: 'Buy/Sell Dental Practice',
  src: 'shape-54.svg'
}, {
  title: 'Clinical Waste Collection',
  src: 'shape-56.svg'
}];

ReactDOM.render(React.createElement(App, { blocks: data }), document.getElementById('root'));