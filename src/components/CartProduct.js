import React from "react";
import { UilTrashAlt } from "@iconscout/react-unicons"; // Icon for trash

function CartPage({ cart, setCart }) {
  // Update the quantity of a product in the cart
  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) }
          : item
      )
    );
  };

  // Remove product from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="row main align-items-center mb-4" key={item.id}>
              <div className="col-2">
                <img className="img-fluid" src={item.image} alt={item.title} />
              </div>
              <div className="col">
                <div className="row text-muted">{item.title}</div>
                <div className="row">{item.description}</div>
              </div>
              <div className="col">
                <button
                  className="btn btn-outline-primary btn-sm me-2"
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity || 1}</span>
                <button
                  className="btn btn-outline-primary btn-sm ms-2"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
              <div className="col align-end">
                <span>€ {(item.price * (item.quantity || 1)).toFixed(2)}</span>
                <button
                  className="btn btn-danger btn-sm ms-3"
                  onClick={() => removeFromCart(item.id)}
                >
                  <UilTrashAlt size="20" color="white" />
                </button>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-end mt-4">
            <h4>Total: € {calculateTotal().toFixed(2)}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
