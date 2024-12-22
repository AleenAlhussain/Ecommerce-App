import React from "react";

const Checkout = () => {
  const checkoutData = {
    items: [
      { id: 1, title: "Sample Product", quantity: 1, price: "$49.99" },
    ],
    total: "$49.99",
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h2>Checkout</h2>
        <div className="checkout-items">
          {checkoutData.items.map((item) => (
            <div key={item.id} className="checkout-item">
              <h4>{item.title}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
        <h3>Total: {checkoutData.total}</h3>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
