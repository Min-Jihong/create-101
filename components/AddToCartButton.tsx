import React from 'react';

export function AddToCartButton({ onAddToCart, disabled }) {
  return (
    <button className='add-to-cart-button' disabled={disabled} onClick={onAddToCart}>
      Add to Cart
    </button>
  );
}
