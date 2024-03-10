import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import {  useState,useEffect } from "react";


const Home = () => {
    const [dataArray, setDataArray] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3001/product/all';
  
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setDataArray(data);
          });
      }, []);
      const [products] = useState(dataArray);
      console.log(products)
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
