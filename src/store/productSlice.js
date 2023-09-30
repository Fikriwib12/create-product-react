import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid4} from 'uuid'

const initialValue = [
    {
        productName: null,
        productCategory: null,
        imageOfProduct: null,
        productFreshness: null,
        additionalDescription:null,
        productPrice:null,
    }
]

export const productSlice = createSlice({
    name: 'product',
    initialState:{
        products: initialValue
    },
    reducers:{
        hapusProduct: (state, action) => {
            state.products = state.products.filter((item) =>{
                return item.id !== action.payload
            })
        },

        tambahProduct: (state, action) => {
            const newData = {id : uuid4(), ...action.payload}

            state.products = [...state.products, newData]
        },

        editProduct: (state, action) => {
            const updatedProducts = state.products.map((item) =>
                item.id === action.payload.id ? { ...item, ...action.payload.updatedProduct } : item
            );
            state.products = updatedProducts;
        } 
    }
})

export const {hapusProduct, tambahProduct, editProduct} = productSlice.actions
export default productSlice.reducer