import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from './store';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.products.cart);
  const products = useSelector(state => state.products.products);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total quantity and total amount
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => {
    const product = products.find(prod => prod.id === item.id);
    return total + (product.price * item.quantity);
  }, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <div>
              <h3>{products.find(prod => prod.id === item.id).title}</h3>
              <p>Price: ${products.find(prod => prod.id === item.id).price}</p>
              <p>Quantity:
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};
export default Cart;
