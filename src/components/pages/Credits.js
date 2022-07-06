import React from "react";
import aboutImage from "../../img/about.jpg";

export default function Credits() {
  return (
    <div className="row align-items-center">
      <div className="col-lg-5">
        <img src={aboutImage} alt="" />
      </div>
      <div className="col-lg-7">
        <h3>Credits</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eos
          vitae nam repellendus impedit nobis totam possimus sapiente sunt
          architecto! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolores eos vitae nam repellendus impedit nobis totam possimus
          sapiente sunt architecto!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eos
          vitae nam repellendus impedit nobis totam possimus sapiente sunt
          architecto! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolores eos vitae nam repellendus impedit nobis totam possimus
          sapiente sunt architecto!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eos
          vitae nam repellendus impedit nobis totam possimus sapiente sunt
          architecto! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolores eos vitae nam repellendus impedit nobis totam possimus
          sapiente sunt architecto!
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto.
          </li>
        </ul>
        <div className="social-links">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
