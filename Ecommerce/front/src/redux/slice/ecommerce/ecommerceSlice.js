import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categorias: [],
  productos: [],
  producto: {},
  status: null
}

export const adminSlice = createSlice({
  name: 'ecommerce',
  initialState,
  reducers: {

    getProductos: (state, {payload}) => {
        state.productos = payload
      },

    getProducto: (state, {payload}) => {
        state.producto = payload
    },

    getCategorias : (state, {payload}) => {
        state.categorias = payload
    },
  }
})

// Action creators function  --> Son funciones que se disparan. Ya estan asociadas a las acciones del reducer
export const { getProductos, getProducto, getCategorias } = adminSlice.actions;
