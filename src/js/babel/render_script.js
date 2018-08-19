// let react = require('react');
// import ReactDOM from 'react-dom';

function ServiceBlock(props) {
  return (
    <a href="#" className="main__service service-main">
      <div className="service-main__icon">
        <img src={props.src} alt={props.title} />
      </div>
      <h4 className="service-main__caption">{props.title}</h4>
    </a>
  );
}

ReactDOM.render(
  <ServiceBlock src="img/shape-72.svg" title="Web Designers" />,
  document.getElementById('root')
);
