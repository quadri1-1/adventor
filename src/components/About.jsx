import React from "react";
import "../styles/about.css";
import people from '../assets/peoples.png';

const About = () => {
    return (
        <div className="section">
      <div>
        <div className="add">
          <h2>Making adventure tours, activities affordable.</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            cursus tortor tempus ac. Purus amet risus amet sagittis. Enim nulla
            a sapien lectus tellus mauris integer ut. Magna viverra sit rhoncus
            convallis id. Aenean egestas turpis aenean feugiat pharetra sed sed
            morbi faucibus.
          </p>
            </div>
           
        </div>
         <div className="mans">
                <img  src={people} alt="" />
            </div>
        </div>
    );
};

export default About;
