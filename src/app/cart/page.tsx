"use client";

import { useContext } from "react";
import {
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

const Cart = () => {
  const {
    cartProducts,
    increaseQuantity,
    decreaseQuantity,
    totalQuantityProduct,
    totalPriceProduct,
  } = useContext(cartContext);

  const isEmpty = totalQuantityProduct === 0;

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
            {cartProducts.map((product) => (
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
                      className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
                      className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                      onClick={() => increaseQuantity(product.id)}
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
            ))}

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
    </div>
  );
};

export default Cart;
