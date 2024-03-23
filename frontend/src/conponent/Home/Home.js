import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import Cards from "../cards/cards.js";
import { useState, useEffect } from "react";

const Home = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/pricing/getdata`);

      setCryptoData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      {cryptoData.map((data, index) => (
        <Cards key={index} cryptoData={data} />
      ))}
    </div>
  );
};

export default Home;
