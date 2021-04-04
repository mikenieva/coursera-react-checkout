/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext} from 'react'
import ProductsContext from './../context/ProductsContext'


const Checkout = () => {

    const ctx = useContext(ProductsContext)
    const {checkout, actualizarTotal, total} = ctx

    useEffect(() => {
        actualizarTotal()
    },[checkout])

    return (
        
                <div class="w-2/5 mb-8">
                    <div class="flex justify-center lg:justify-end">
                        <div class="border max-w-md w-full px-20 pt-3 pb-10">
                            <div class="flex flex-row-reverse justify-between mt-6">
                                            <div class="">
                                                    <h3 class="font-extrabold text-gray-600">Precio Total</h3>
                                                </div>
                                        </div>
                            { 
                                checkout.map((e) => {
                                    return (
                                        <div class="flex justify-between mt-6">
                                            <span class="text-sm text-gray-600">{`${e.cantidad}`}x</span>
                                            <div class="flex">
                                                <div class="">
                                                    <h3 class="text-sm text-gray-600">{`${e.nombre}`}</h3>
                                                </div>
                                            </div>
                                            <div class="">
                                                    <h3 class="text-sm text-gray-600">{`$${e.precio * e.cantidad} USD`}</h3>
                                                </div>
                                        </div>
                                    )
                                })
                            }
                        
                        <div class="flex items-center justify-between mt-10">
                                <h3 class="text-gray-600">Total de la orden: {`$${total} USD`}</h3>
                        </div>

                        <button type="button" class="btn-indigo">
                            Pagar
                        </button>
                        
                        </div>
                    </div>
                </div>
    )
}

export default Checkout
