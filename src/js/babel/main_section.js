// main section start

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

// main section end
