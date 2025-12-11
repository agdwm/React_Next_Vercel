"use client";

import React, { useState, createContext, useEffect } from "react";

interface ProductCart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  stock: number;
}

interface ProductCartItem {
  id: number;
  title: string;
  price: number;
  stock: number;
}

interface ProductCartContext {
  cartProducts: ProductCart[];
  addCartProducts: (product: ProductCartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalQuantityProduct: number;
  totalPriceProduct: number;
}

interface Props {
  children: React.ReactNode;
}

export const cartContext = createContext({} as ProductCartContext);

const CartProvider = ({ children }: Props) => {
  const [cartProducts, setCartProducts] = useState<ProductCart[]>([]);

  // ➕ Añadir producto al carrito (respetando stock)
  const addCartProducts = ({ id, title, price, stock }: ProductCartItem) => {
    setCartProducts((prev) => {
      // Si no hay stock, no añadimos nada
      if (stock <= 0) return prev;

      // ¿Existe ya en el carrito?
      const existing = prev.find((product) => product.id === id);

      // Producto nuevo
      if (!existing) {
        return [...prev, { id, title, price, quantity: 1, stock }];
      }

      // Producto existente → aumentar cantidad si no supera stock
      return prev.map((product) => {
        if (product.id !== id) return product;

        // Si ya está al máximo de stock, no cambiamos nada
        if (product.quantity >= product.stock) {
          return product;
        }

        return {
          ...product,
          quantity: product.quantity + 1,
        };
      });
    });
  };

  // 🔼 Aumentar cantidad desde el carrito (también respetando stock)
  const increaseQuantity = (id: number) => {
    setCartProducts((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        if (item.quantity >= item.stock) {
          return item; // no aumentar más
        }

        return {
          ...item,
          quantity: item.quantity + 1,
        };
      })
    );
  };

  // 🔽 Disminuir cantidad (si llega a 0, se elimina)
  const decreaseQuantity = (id: number) => {
    setCartProducts((prev) => {
      const target = prev.find((item) => item.id === id);
      if (!target) return prev;

      // Si la cantidad es 1 → eliminar del carrito
      if (target.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      }

      // Si es mayor que 1 → restar 1
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // ❌ Eliminar un producto del carrito
  const removeFromCart = (id: number) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };

  // 🧹 Vaciar todo el carrito
  const clearCart = () => {
    setCartProducts([]);
  };

  // 🔢 Total de unidades en el carrito
  const totalQuantityProduct = cartProducts.reduce(
    (acc, current) => acc + current.quantity,
    0
  );

  // 💶 Total € del carrito
  const totalPriceProduct = cartProducts.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  return (
    <cartContext.Provider
      value={{
        cartProducts,
        addCartProducts,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalQuantityProduct,
        totalPriceProduct,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
