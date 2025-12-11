"use client";

import { useContext } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

import PageHeader from "@/components/PageHeading";
import { cartContext } from "@/context/CartContext";
import { formatPrice } from "@/helpers/format-price";
import { clear } from "console";
import { cn } from "@/helpers/classnames";

const Cart = () => {
  const {
    cartProducts,
    increaseQuantity,
    decreaseQuantity,
    totalQuantityProduct,
    totalPriceProduct,
    clearCart,
  } = useContext(cartContext);

  const isEmpty = totalQuantityProduct === 0;
  const btnQuantityBaseClass =
    "inline-flex items-center p-1 text-sm font-medium bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";

  return (
    <div className="space-y-8">
      <PageHeader text="Book Cart" />
      <Table>
        <TableHead>
          {isEmpty ? (
            <TableRow>
              <TableHeadCell
                colSpan={3}
                className="text-center text-gray-500 dark:text-gray-400"
              >
                Cart is empty
              </TableHeadCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableHeadCell>Product</TableHeadCell>
              <TableHeadCell className="text-right">Quantity</TableHeadCell>
              <TableHeadCell className="text-right">Price</TableHeadCell>
            </TableRow>
          )}
        </TableHead>

        {!isEmpty && (
          <TableBody className="divide-y">
            {cartProducts.map((product) => {
              const isMaxQuantity = product.quantity >= product.stock;

              return (
                <TableRow
                  key={product.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  {/* Columna: nombre del producto */}
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {product.title}
                  </TableCell>

                  {/* Columna: cantidad + botones */}
                  <TableCell>
                    <div className="flex justify-end items-center space-x-3">
                      {/* Botón - */}
                      <button
                        className={cn(btnQuantityBaseClass, "text-gray-800")}
                        type="button"
                        onClick={() => decreaseQuantity(product.id)}
                      >
                        <span className="sr-only">Decrease quantity</span>
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {/* Cantidad */}
                      <div>
                        <span className="bg-gray-50 w-10 text-center border border-gray-300 text-gray-900 text-sm rounded-lg block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                          {product.quantity}
                        </span>
                      </div>

                      {/* Botón + */}
                      <button
                        className={cn(
                          btnQuantityBaseClass,
                          isMaxQuantity
                            ? "text-gray-500 cursor-not-allowed opacity-60"
                            : "text-gray-800 cursor-pointer"
                        )}
                        type="button"
                        onClick={() => increaseQuantity(product.id)}
                        disabled={isMaxQuantity}
                      >
                        <span className="sr-only">Increase quantity</span>
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </TableCell>

                  {/* Columna: precio */}
                  <TableCell className="whitespace-nowrap text-right font-medium text-gray-900 dark:text-white">
                    {formatPrice(product.price)}
                  </TableCell>
                </TableRow>
              );
            })}

            {/* Footer: Total */}
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 font-extrabold">
              <TableCell
                colSpan={2}
                className="font-extrabold text-gray-900 dark:text-white"
              >
                Total
              </TableCell>
              <TableCell className="text-right font-extrabold text-gray-900 dark:text-white">
                {formatPrice(totalPriceProduct)}
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
      {!isEmpty && (
        <div className="flex">
          <Button color="failure" className="mt-4" onClick={clearCart}>
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Vaciar carrito
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
