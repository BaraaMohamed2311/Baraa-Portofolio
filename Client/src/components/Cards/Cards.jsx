/* eslint-disable react/prop-types */
import "./cards.css"

function Cards({ imgPath, title, iscert, link }) {
  return (
    <div className={iscert ? 'cert-card' : 'card'}>
      {iscert ? (
        <a  rel="noreferrer" className='card-link certif-link' target="_blank" href={link}>
          <img  width="160"    loading="lazy" className='card-img' src={`./${imgPath}`} alt="Skills_img" />
          <div className="view"><h3>View</h3></div>
        </a>
      ) : (
        <img  width="160"  loading="lazy" className='card-img' src={`./${imgPath}`} alt="Skills_img" />
      )}
      <h3 className='card-title' data-title={title}>{title}</h3>
    </div>
  );
}

export default Cards;
