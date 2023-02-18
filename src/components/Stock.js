import React, {useState} from "react";

function Stock({stock, onClickStock }) {

  function handleClick(){
    //console.log('stock clicked', stock.name, stock)
    
    //onBuyStock ? onBuyStock(stock) : onSellStock(stock)
    onClickStock(stock)
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
