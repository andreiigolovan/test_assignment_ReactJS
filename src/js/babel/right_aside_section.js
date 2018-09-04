// right aside section start

function PersonName(props) {
  return (
    <a href="#" className="card-featured__title">
      {props.title}
    </a>
  );
}

function PersonPhoto(props) {
  return (
    <div className="card-featured__photo">
      <a href="#">
        <img src={'img/' + props.src} alt={props.title} />
      </a>
    </div>
  );
}

function PersonInfo(props) {
  return (
    <div className="card-featured__info">
      <p className="card-featured__info_position">{props.position}</p>
      <p className="card-featured__info_location">{props.location}</p>
      <a href="#" className="btn btn-addfriend">
        Add friend
      </a>
    </div>
  );
}

class People extends React.Component {
  render() {
    return this.props.humans.map(human => {
      return (
        <div className="featured__card card-featured_people" key={human.id}>
          <PersonName title={human.title} />
          <div className="card-featured__wrap">
            <PersonPhoto src={human.src} title={human.title} />
            <PersonInfo location={human.location} position={human.position} />
          </div>
        </div>
      );
    });
  }
}

const featuredPeopleData = [
  {
    id: 1,
    altText: 'Dennis Adams',
    title: 'Dennis Adams',
    location: 'London, England',
    position: 'Dentist (Practice Owner)',
    src: 'layer-36.jpg'
  },
  {
    id: 2,
    altText: 'Mary Carpenter',
    title: 'Mary Carpenter',
    location: 'Belgrade, Serbia',
    position: 'Dentist (Practice Owner)',
    src: 'layer-37.jpg'
  },
  {
    id: 3,
    altText: 'Danielle Salazar',
    title: 'Danielle Salazar',
    location: 'Paris, France',
    position: 'Dentist (Practice Owner)',
    src: 'layer-38.jpg'
  }
];

ReactDOM.render(
  <People humans={featuredPeopleData} />,
  document.getElementById('people')
);

function ProductTitle(props) {
  return (
    <a href="#" className="card-featured__title">
      {props.title}
    </a>
  );
}

function ProductPhoto(props) {
  return (
    <div className="card-featured__photo">
      <a href="#">
        <img src={'img/' + props.src} alt={props.altText} />
      </a>
    </div>
  );
}

function ProductInfo(props) {
  return (
    <div className="card-featured__info-desc">
      <div>{props.shortDesc}</div>
      <div>{props.desc}</div>
    </div>
  );
}

class Products extends React.Component {
  render() {
    return this.props.products.map(product => {
      return (
        <div className="featured__card card-featured_product" key={product.id}>
          <ProductTitle title={product.title} />
          <div className="card-featured__wrap">
            <ProductPhoto src={product.src} altText={product.altText} />
            <ProductInfo desc={product.desc} shortDesc={product.shortDesc} />
          </div>
        </div>
      );
    });
  }
}

const featuredProductsData = [
  {
    id: 1,
    altText: 'child during treatment',
    title: 'Product Name',
    shortDesc: 'Product Short Description.',
    desc: 'The quick brown fox jumps over the lazy dog.',
    src: 'layer-34.jpg'
  },
  {
    id: 2,
    altText: 'doctor smiles',
    title: 'Product Name',
    shortDesc: 'Product Short Description.',
    desc: 'The quick brown fox jumps over the lazy dog.',
    src: 'layer-35.jpg'
  }
];
ReactDOM.render(
  <Products products={featuredProductsData} />,
  document.getElementById('products')
);

class AdsBlockRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      index: 0,
      src: null
    };
  }

  componentWillMount() {
    this.state.src = 'img/' + this.state.images[0].src;
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.changeImg();
    }, 2500);
    console.log('timerId: ' + this.timerId);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  changeImg() {
    this.state.index += 1;
    // console.log('second ad block index: ' + this.state.index);
    if (this.state.index > 2) {
      this.state.index = 0;
    }
    this.setState({
      src: 'img/' + this.state.images[this.state.index].src
    });
  }

  render() {
    return (
      <a href="#" key={this.state.images[this.state.index].src}>
        <img
          id="adsss__image_right"
          className="adsss__image"
          src={this.state.src}
          alt="Advertisement"
        />
      </a>
    );
  }
}

const imagesRightCOPY = [
  { id: 1, src: '-----2.jpg' },
  { id: 2, src: 'layer-32.jpg' },
  { id: 3, src: 'layer-33.jpg' }
];

ReactDOM.render(
  <AdsBlockRight images={imagesRightCOPY} />,
  document.getElementById('advRight')
);

// right aside section end
