import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../contexts/CardContext";

function ProductDetail() {
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <h1>{product.title}</h1>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div>
          <img
            src={product.image}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "contain",
              borderRadius: "10px",
              boxShadow: "2px 2px 5px black",
              margin: "10px",
              border: "2px solid black",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              overflow: "hidden",
              position: "relative",
            }}
            alt={product.title}
          />
        </div>
        <div style={{ marginLeft: "40px", marginRight: "40px" }}>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button
            className="btn btn-primary m-2 p-2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-primary m-2 p-2" 
            onClick={() => addToCart(product)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
