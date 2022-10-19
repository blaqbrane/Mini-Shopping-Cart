import Datas from "./ShopData";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
const Home = () => {
  const[datas,setDatas] = useState(Datas)
  const[price,setPrice] = useState(0)
  const addItems = (id) => {
    const newadd = datas.map((data) => {
      return data.id === id ? {...data, num:data.num + 1} : data
     })
    setDatas(newadd)
  };
  const handlePrice = () => {
    let price_Total = 0
     datas.map((data) => (price_Total += data.num * data.price))
     setPrice(price_Total)
  }
  const subtractItems = (id) => {
    const newsubtract = datas.map((data) => {
      return data.id === id ? {...data, num:data.num - 1} : data
    })
    setDatas(newsubtract)
  }
  const deleteItems = (id) =>{
    const newData = datas.filter((data => data.id !== id))
    setDatas(newData)
  }
  console.log(datas.length)
  const handleReset = () => {
    const reset = datas.map((data) => {
      return {...data, num:data.num - data.num}  
    })
    setDatas(reset)
    setPrice(0)
  }
  useEffect(() => {
    handlePrice()
  })
  return ( 
    <div className="app">
      <Navbar price={price} Total_item= {datas.filter(data => data.num > 0 ).length }/>
      {datas.length === 0 && <p className="no--items">... Add item to cart</p>}
      {datas.map((data, id) =>{
        return(
          <div key={id} className="container">
            <p className="data--items"> {data.item}</p>
            <p style={{backgroundColor: data.num===0? "rgb(177, 189, 13)": "rgb(216, 191, 29)"}} className="zero--num">quantity:{data.num === 0 ? 'Zero': data.num}</p>
            <br/>
            <br/>
            <p onClick={() => addItems(data.id)} className="add--num">{data.add}</p>  
            <p onClick={() => subtractItems(data.id)} className="subtract--num">{data.minus}</p>
            <button onClick={() => deleteItems(data.id)} className="delete--num">{data.delete}</button> 
          </div>  
        )
      })}
      <button onClick={handleReset} className="reset">Reset</button>
    </div>

    )
}
export default Home