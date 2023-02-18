import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks]= useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [filterBy, setFilterBy] = useState('')
  

  useEffect(()=>{
    fetch(`http://localhost:3001/stocks`)
    .then((r)=> r.json())
    .then((stocks)=> setStocks(stocks))
  }, [])

  function handleBuyStock(stockBought){
    //console.log(stockBought)
    setPortfolio([...portfolio, stockBought])
  }

  function handleSellStock(soldStock){
    //console.log("i was sold ", soldStock)
    const updatedPortfolio = portfolio.filter((stock) => stock.id !== soldStock.id)
    setPortfolio(updatedPortfolio)
  }


  function sortStocks(e){
    setSortBy(e.target.value)
  }

  useEffect(()=>{
    if (sortBy === 'Alphabetically'){
      const sortedStocks = sortByName()
      setStocks(sortedStocks)
    } else {
      const sortedStocks = sortByPrice()
      setStocks(sortedStocks)
    }
  }, [sortBy])


  function sortByName(){
    return (
      [...stocks].sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    }));
  }

  function sortByPrice(){
    return ([...stocks].sort((a, b) => a.price - b.price));
  }

  
  function filterStocks(e){
    setFilterBy(e.target.value)
  }



  const filteredStocks = stocks.filter((stock)=>{
    if (stock.type === filterBy){
      return stock
    } else if (filterBy === '') {return stock}
    })


  return (
    <div>
      <SearchBar sortStocks={sortStocks} filterStocks={filterStocks} filterBy={filterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={filteredStocks} onBuyStock={handleBuyStock} 
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            stocks={portfolio} onSellStock={handleSellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
