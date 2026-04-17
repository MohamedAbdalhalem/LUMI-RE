import React from 'react'
import { use } from 'react';
import { CartContext } from '../store/CartContext';

export default function useAddProduct(variantId) {
  const { handleAddProductToCart } = use(CartContext);

  function addProduct(event) {
    event.preventDefault();
    const productData = {
      variant_id: variantId,
      quantity: 1,
    };
    handleAddProductToCart(productData);
    }
    
    return addProduct
}
