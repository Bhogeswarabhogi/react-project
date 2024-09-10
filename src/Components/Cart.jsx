import { useCart } from "../contexts/CardContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p
          style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "serif" }}
        >
          Your cart is empty.
        </p>
      ) : (
        <div
          style={{
            boxShadow: "2px 2px 5px black",
            padding: "20px",
            borderRadius: "10px",
            margin: "20px",
          }}
        >
          <ul className="list-group">
            {cart.map((product, index) => (
              <li
                key={index}
                className="list-group-item d-flex align-items-center cart-item"
              >
                <img src={product.image} alt={product.title} />
                <span className="title">{product.title}</span>
                <span className="price">${product.price}</span>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div
            className="cart-summary"
            style={{
              padding: "20px",
              borderRadius: "10px",
              margin: "20px",
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "bold",
              fontFamily: "serif",
            }}
          >
            <h2>Summary</h2>
            <p>Total Items: {cart.length}</p>
            <p>
              Total Price: $
              {cart
                .reduce((total, product) => total + product.price, 0)
                .toFixed(2)}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => alert("Checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
