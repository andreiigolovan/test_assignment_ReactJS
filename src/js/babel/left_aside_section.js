// left aside section start

// ads rerenderind in interval
// react lifecycle methods use 

class AdsBlockLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      index: 0,
      src: null
    };
  }

  componentWillMount() {
    // console.log(this.state.src)
    this.state.src = 'img/' + this.state.images[0].src;
  }

  componentDidMount() {
    let _this = this;
    this.timerId = setInterval(function() {
      // console.log(_this);
      return _this.changeImg();
    }, 2000);
    console.log('timerId: ' + this.timerId);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  changeImg() {
    this.state.index += 1;
    // console.log('first ad block index: ' + this.state.index);
    if (this.state.index > 1) {
      this.state.index = 0;
    }
    this.setState({
      src: 'img/' + this.state.images[this.state.index].src
    });
  }

  render() {
    return (
      <a href="#" key={this.state.images[this.state.index].id}>
        <img
          id="adsss__image_left"
          className="adsss__image"
          src={this.state.src}
          alt="Advertisement"
        />
      </a>
    );
  }
}

const imagesLeftCOPY = [
  { id: 1, src: '-----1.jpg' },
  { id: 2, src: 'layer-42.jpg' }
];

ReactDOM.render(
  <AdsBlockLeft images={imagesLeftCOPY} />,
  document.getElementById('advLeft')
);

function CompanyPicture(props) {
  return (
    <div className="card-featured__photo">
      <a href="#">
        <img src={'img/' + props.src} alt={props.altText} />
      </a>
    </div>
  );
}

function CompanyInfo(props) {
  return (
    <div className="card-featured__info">
      <a href="#" className="card-featured__info_company-name">
        {props.name}
      </a>
      <p className="card-featured__info_company-mfc">{props.specialization}</p>
      <p className="card-featured__info_company-location">{props.location}</p>
      <a href="#" className="btn btn-follow">
        Follow Now
      </a>
    </div>
  );
}

class Companies extends React.Component {
  render() {
    return this.props.companies.map(element => {
      return (
        <div className="featured__card card-featured" key={element.id}>
          <CompanyPicture src={element.src} altText={element.altText} />
          <CompanyInfo
            name={element.name}
            location={element.location}
            specialization={element.specialization}
          />
        </div>
      );
    });
  }
}

const featuredCompaniesData = [
  {
    id: 1,
    altText: 'office of manufacturer',
    name: 'Company Name',
    location: 'Belgrade, Serbia',
    specialization: 'Manufacturer',
    src: 'layer-39.jpg'
  },
  {
    id: 2,
    altText: 'building of service provider',
    name: 'Company Name',
    location: 'New York, USA',
    specialization: 'Service Provider',
    src: 'layer-40.jpg'
  },
  {
    id: 3,
    altText: 'building of supplier',
    name: 'Company Name',
    location: 'London, England',
    specialization: 'Supplier',
    src: 'layer-41.jpg'
  }
];

ReactDOM.render(
  <Companies companies={featuredCompaniesData} />,
  document.getElementById('companies')
);

// left aside section end
