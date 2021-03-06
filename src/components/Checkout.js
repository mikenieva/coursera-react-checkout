/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import ProductsContext from "./../context/ProductsContext";

const Checkout = () => {
  const ctx = useContext(ProductsContext);
  const { checkout, actualizarTotal, total } = ctx;

  useEffect(() => {
    actualizarTotal();
  }, [checkout]);

  return (
    <div className="w-2/5 mb-8">
      <div className="flex justify-center lg:justify-end">
        <div className="border max-w-md w-full px-20 pt-3 pb-10">
          <div className="flex flex-row-reverse justify-between mt-6">
            <div className="">
              <h3 className="font-extrabold text-gray-600">Precio Total</h3>
            </div>
          </div>
          {checkout.map((e, i) => {
            return (
              <div className="flex justify-between mt-6" key={i}>
                <span className="text-sm text-gray-600">{`${e.cantidad}`}x</span>
                <div className="flex">
                  <div className="">
                    <h3 className="text-sm text-gray-600">{`${e.nombre}`}</h3>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-sm text-gray-600">{`$${
                    e.precio * e.cantidad
                  } USD`}</h3>
                </div>
              </div>
            );
          })}

          <div className="flex items-center justify-between mt-10">
            <h3 className="text-gray-600">Total de la orden: {`$${total} USD`}</h3>
          </div>

          <button type="button" className="btn-indigo">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
