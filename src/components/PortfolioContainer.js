import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onSellStock}) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks.map((stock)=>(
        <Stock
          key={stock.id} stock={stock} onClickStock={onSellStock}
        />
      ))}

    </div>
  );
}

export default PortfolioContainer;
