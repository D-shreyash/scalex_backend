import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { cryptoData } = props;

  // console.log("askdjcbnalicd", imageUrl\);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={cryptoData.info.imageUrl}
        className="card-img-top"
        alt="crypto"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="/about" className="btn btn-primary">
          About
        </Link>
      </div>
    </div>
  );
};

export default Cards;
