import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="row rounded mx-5 my-5">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card" style={{ boxShadow: "2px 2px 5px black", height:"400px", width:"300px" }}>
            <img
              src={product.image}
              className="card-img-top"
              style={{
                objectFit: "contain",
                marginTop: "20px",
                borderRadius: "10px",
                width: "200px",
                height: "200px",
                border: "2px solid black",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                overflow: "hidden",
                position: "relative",
              }}
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
