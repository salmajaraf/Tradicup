import "../assets/css/countries.css";

import flag1 from '../assets/images/korea.png';
import flag2 from '../assets/images/portugail.png';
import flag3 from '../assets/images/mrc.png';
import flag4 from '../assets/images/spain.png';

const images = [flag1, flag2, flag3,flag4,flag1,flag2,flag3,flag4].map((image) => ({
  id: crypto.randomUUID(),
  image
}));



const Countries = ({ speed = 9000 }) => {
  return (
    <div className="inner">
      <h2 className="Countries">COUNTRIES</h2>
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Countries;