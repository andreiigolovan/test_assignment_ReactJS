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

function CompanyPicture(props) {
  return React.createElement(
    "div",
    { className: "card-featured__photo" },
    React.createElement(
      "a",
      { href: "#" },
      React.createElement("img", { src: 'img/' + props.src, alt: props.altText })
    )
  );
}

function CompanyInfo(props) {
  return React.createElement(
    "div",
    { className: "card-featured__info" },
    React.createElement(
      "a",
      { href: "#", "class": "card-featured__info_company-name" },
      props.name
    ),
    React.createElement(
      "p",
      { className: "card-featured__info_company-mfc" },
      props.specialization
    ),
    React.createElement(
      "p",
      { className: "card-featured__info_company-location" },
      props.location
    ),
    React.createElement(
      "a",
      { href: "#", className: "btn btn-follow" },
      "Follow Now"
    )
  );
}

var Company = function (_React$Component) {
  _inherits(Company, _React$Component);

  function Company() {
    _classCallCheck(this, Company);

    return _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).apply(this, arguments));
  }

  _createClass(Company, [{
    key: "render",
    value: function render() {
      return this.props.companies.map(function (element) {
        return React.createElement(
          "div",
          { "class": "featured__card card-featured" },
          React.createElement(CompanyPicture, { src: element.src, altText: element.altText }),
          React.createElement(CompanyInfo, {
            name: element.name,
            location: element.location,
            specialization: element.specialization
          })
        );
      });
    }
  }]);

  return Company;
}(React.Component);

var featuredCompaniesData = [{
  id: '1',
  altText: 'office of manufacturer',
  name: 'Company Name',
  location: 'Belgrade, Serbia',
  specialization: 'Manufacturer',
  src: 'layer-39.jpg'
}, {
  id: '2',
  altText: 'building of service provider',
  name: 'Company Name',
  location: 'New York, USA',
  specialization: 'Service Provider',
  src: 'layer-40.jpg'
}, {
  id: '3',
  altText: 'building of supplier',
  name: 'Company Name',
  location: 'London, England',
  specialization: 'Supplier',
  src: 'layer-41.jpg'
}];

ReactDOM.render(React.createElement(Company, { companies: featuredCompaniesData }), document.getElementById('companies'));

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

var Services = function (_React$Component2) {
  _inherits(Services, _React$Component2);

  function Services() {
    _classCallCheck(this, Services);

    return _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).apply(this, arguments));
  }

  _createClass(Services, [{
    key: "render",
    value: function render() {
      return this.props.blocks.map(function (block) {
        return React.createElement(ServiceBlock, { key: block.id, title: block.title, src: block.src });
      });
    }
  }]);

  return Services;
}(React.Component);

var servicesData = [{
  id: 1,
  title: 'Accountancy',
  src: 'shape-51.svg'
}, {
  id: 2,
  title: 'Associations',
  src: 'shape-52.svg'
}, {
  id: 3,
  title: 'Buy/Sell Dental Practice',
  src: 'shape-54.svg'
}, {
  id: 4,
  title: 'Clinical Waste Collection',
  src: 'shape-56.svg'
}, {
  id: 5,
  title: 'Computer Service',
  src: 'shape-57.svg'
}, {
  id: 6,
  title: 'CPR/Basic Life Support Training',
  src: 'shape-58.svg'
}, {
  id: 7,
  title: 'Dental Recruitment',
  src: 'shape-61.svg'
}, {
  id: 8,
  title: 'Dental Software',
  src: 'shape-62.svg'
}, {
  id: 9,
  title: 'Electrical Safety And Testing',
  src: 'shape-63.svg'
}, {
  id: 10,
  title: 'Marketing',
  src: 'shape-65.svg'
}, {
  id: 11,
  title: 'Others',
  src: 'shape-71.svg'
}, {
  id: 12,
  title: 'Repairs',
  src: 'shape-66.svg'
}, {
  id: 13,
  title: 'Solicitors',
  src: 'shape-68.svg'
}, {
  id: 14,
  title: 'Surgery Design',
  src: 'shape-75.svg'
}, {
  id: 15,
  title: 'Training & Courses',
  src: 'shape-69.svg'
}, {
  id: 16,
  title: 'Web Designers',
  src: 'shape-72.svg'
}, {
  id: 17,
  title: 'Cleaning Agencies',
  src: 'shape-55.svg'
}, {
  id: 18,
  title: 'Dental Chair Recovery',
  src: 'shape-60.svg'
}, {
  id: 19,
  title: 'Equipment Engineering',
  src: 'shape-64.svg'
}, {
  id: 20,
  title: 'Selling Gold',
  src: 'shape-67.svg'
}, {
  id: 21,
  title: 'Uniform & Workwear',
  src: 'shape-70.svg'
}];

ReactDOM.render(React.createElement(Services, { blocks: servicesData }), document.getElementById('root'));