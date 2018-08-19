// let react = require('react');
// import ReactDOM from 'react-dom';

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

class App extends React.Component {
  render() {
    return this.props.blocks.map(block => {
      return <ServiceBlock title={block.title} src={block.src} />;
    });
  }
}

let data = [
  {
    title: 'Accountancy',
    src: 'shape-51.svg'
  },
  {
    title: 'Associations',
    src: 'shape-52.svg'
  },
  {
    title: 'Buy/Sell Dental Practice',
    src: 'shape-54.svg'
  },
  {
    title: 'Clinical Waste Collection',
    src: 'shape-56.svg'
  }
];

ReactDOM.render(<App blocks={data} />, document.getElementById('root'));
