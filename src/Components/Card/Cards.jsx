import React from "react";
import "./Cards.css";
import CardArticle from "./CardArticle";
import cardData from "./cardData";

function Cards() {
  const mappedCard = cardData.map((entry) => {
    return <CardArticle items={entry} />;
  });

  return <>{mappedCard}</>;
}

export default Cards;
