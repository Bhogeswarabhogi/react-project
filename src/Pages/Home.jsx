import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [id]);

  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div
              className="card"
              style={{ width: "300px", height: "400px", padding: "10px" }}
            >
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
              />
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={{ fontWeight: "bold" }}
                >
                  {product.title}
                </h5>
              </div>
              <div className="card-footer">
                <small
                  className="text-muted d-flex justify-content-center fw-bold"
                  style={{ fontSize: "20px" }}
                >
                  Price: ${product.price}
                </small>
              </div>
              <div>
                <button
                  className="btn btn-primary mt-3 mx-auto d-flex justify-content-center"
                  onClick={() =>
                    (window.location.href = `/product/${product.id}`)
                  }
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
