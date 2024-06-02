
import "./mysec.css";
import MySecSvg from "./MySecSvg";
function MySec() {



  return (
    <section id="mysec" className="mysec" >
      <MySecSvg  />
      <div className="baraa-info">
        <img className="baraa-img" src="assets/BaraaC.webp" alt="Baraa Mohamed Image" />
        <div className="baraa-text-wrapper">
          <h1 className="main-h1">Baraa Mohamed Fathy</h1>
          <ol className="main-ol">
          <li className="main-text">Born in <span className="highlight">Alexandria</span>, Egypt on <span className="highlight">January 1, 2003</span>. Currently a student at the Faculty of Engineering, Alexandria, in the Electrical Communication department.</li>
          <li className="main-text">Enthusiast, <span className="highlight">looking to become a senior engineer</span> in software development.</li>
          <li className="main-text">Interested in <span className="highlight">web development</span> and <span className="highlight">cloud computing</span>.</li>
          </ol>
          
        </div>
      </div>
      
    </section>
  );
}

export default MySec;

