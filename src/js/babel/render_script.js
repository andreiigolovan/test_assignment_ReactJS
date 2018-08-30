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
        <div className="featured__card card-featured">
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
    id: '1',
    altText: 'office of manufacturer',
    name: 'Company Name',
    location: 'Belgrade, Serbia',
    specialization: 'Manufacturer',
    src: 'layer-39.jpg'
  },
  {
    id: '2',
    altText: 'building of service provider',
    name: 'Company Name',
    location: 'New York, USA',
    specialization: 'Service Provider',
    src: 'layer-40.jpg'
  },
  {
    id: '3',
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

function ServiceBlock(props) {
  return (
    <a href="#" className="main__service service-main">
      <div className="service-main__icon">
        <img src={'img/' + props.src} alt={props.title} />
      </div>
      <h4 className="service-main__caption">{props.title}</h4>
    </a>
  );
}

class Services extends React.Component {
  render() {
    return this.props.blocks.map(block => {
      return (
        <ServiceBlock key={block.id} title={block.title} src={block.src} />
      );
    });
  }
}

const servicesData = [
  {
    id: 1,
    title: 'Accountancy',
    src: 'shape-51.svg'
  },
  {
    id: 2,
    title: 'Associations',
    src: 'shape-52.svg'
  },
  {
    id: 3,
    title: 'Buy/Sell Dental Practice',
    src: 'shape-54.svg'
  },
  {
    id: 4,
    title: 'Clinical Waste Collection',
    src: 'shape-56.svg'
  },
  {
    id: 5,
    title: 'Computer Service',
    src: 'shape-57.svg'
  },
  {
    id: 6,
    title: 'CPR/Basic Life Support Training',
    src: 'shape-58.svg'
  },
  {
    id: 7,
    title: 'Dental Recruitment',
    src: 'shape-61.svg'
  },
  {
    id: 8,
    title: 'Dental Software',
    src: 'shape-62.svg'
  },
  {
    id: 9,
    title: 'Electrical Safety And Testing',
    src: 'shape-63.svg'
  },
  {
    id: 10,
    title: 'Marketing',
    src: 'shape-65.svg'
  },
  {
    id: 11,
    title: 'Others',
    src: 'shape-71.svg'
  },
  {
    id: 12,
    title: 'Repairs',
    src: 'shape-66.svg'
  },
  {
    id: 13,
    title: 'Solicitors',
    src: 'shape-68.svg'
  },
  {
    id: 14,
    title: 'Surgery Design',
    src: 'shape-75.svg'
  },
  {
    id: 15,
    title: 'Training & Courses',
    src: 'shape-69.svg'
  },
  {
    id: 16,
    title: 'Web Designers',
    src: 'shape-72.svg'
  },
  {
    id: 17,
    title: 'Cleaning Agencies',
    src: 'shape-55.svg'
  },
  {
    id: 18,
    title: 'Dental Chair Recovery',
    src: 'shape-60.svg'
  },
  {
    id: 19,
    title: 'Equipment Engineering',
    src: 'shape-64.svg'
  },
  {
    id: 20,
    title: 'Selling Gold',
    src: 'shape-67.svg'
  },
  {
    id: 21,
    title: 'Uniform & Workwear',
    src: 'shape-70.svg'
  }
];

ReactDOM.render(
  <Services blocks={servicesData} />,
  document.getElementById('services')
);

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
        <div className="featured__card card-featured_people">
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
        <div className="featured__card card-featured_product">
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
