/* eslint-disable react/prop-types */
import "./cards.css"

function Cards({ imgPath, title, iscert, link }) {
  const imagePath = `${import.meta.env.BASE_URL}${imgPath.startsWith('/') ? imgPath.slice(1) : imgPath}`;
  return (
    <div className={iscert ? 'cert-card' : 'card'}>
      {iscert ? (
        <a  rel="noreferrer" className='card-link' target="_blank" href={link}>
          <img className='card-img' src={imagePath} alt="Skills_img" />
        </a>
      ) : (
        <img className='card-img' src={imagePath} alt="Skills_img" />
      )}
      <h3 className='card-title' data-title={title}>{title}</h3>
    </div>
  );
}

export default Cards;
