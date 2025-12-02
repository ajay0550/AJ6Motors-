import React from "react";
import "./ServiceCard.css";

export default function Card({ title, image, points, couponText, btnText }) {
  return (
    <div className="service-card">
      <div className="card-top">
        <img
          src={image}
          alt="service"
          className="card-image"
        />

        <div className="card-content">
          <div className="card-title-row">
            <h3 className="card-title">{title}</h3>
            
          </div>

          <ul className="card-points">
            {points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card-bottom">
        <div className="coupon-text">
           {couponText}
        </div>
        <a className="login-link" href="#contact-section">{btnText}</a>
      </div>
    </div>
  );
}
