/* eslint-disable react/prop-types */
import "./skills.css";
import List from "../List/List.jsx";
import { Practicing, Studying , ActivateH2 , Magnet ,Certificates} from "./skills";
import { useScrollPosContext} from "../../../Context/ScrollPosContext.jsx";



function Skills() {

  let {scrollPos}  = useScrollPosContext();
  // activating header whenever scroll context triggers a rerender for it
  ActivateH2(scrollPos);
  Magnet();


  return (
    <section id="skills" className="skills margin">
      
      <List iscert={false} className={"list0 list"} id={"Practicing-list"} data={Practicing} header={"Practicing"} />
      
      <List iscert={false} className={"list1 list"} id={"Studying-list"}  data={Studying}  header={"Studying"}/>

      <List  iscert={true} className={"list2 list"} id={"Cert-list"}  data={Certificates}  header={"Certificates"}/>

<div className="self-status-wrapper">
        <h2 id="Status" className="skills-section-title">
          Status
        </h2>

          <div className="status-wrapper">
            <div className="status active-status">
              <h5>Focusing on Self Learning</h5>
            </div>

          <div className="outer-circle" data-value="85%">
            <div className="inner-circle">
              <h4>
                GPA
                <br />
                <span>3.14</span>
              </h4>
            </div>
          </div>

          <div className="status ">
            <h5>Focusing on college exams</h5>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
