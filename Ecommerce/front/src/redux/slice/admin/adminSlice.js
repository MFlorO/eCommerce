import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categorias: [],
  productos: [],
  producto: {},
  status: null
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {

    getStatus : (state,{payload}) => {
      state.status = payload
    },
    
    getCategorias : (state, {payload}) => {
      state.categorias = payload
    },

    postCatgorias: (state, {payload}) => {
      state.categorias.push(payload)
    },

    updateCatgorias: (state, {payload}) => {
      state.categorias = payload
    },

    deleteCategorias: (state, {payload}) => {
      state.categorias = state.categorias.filter(c  => c.id !== payload)
    },

    getProductos: (state, {payload}) => {
      state.productos = payload
    },

    getProducto: (state, {payload}) => {
      state.producto = payload
    },

    postProducto: (state, {payload}) => {
      state.productos.push(payload)
    },

    postModeloProductoId : (state,{payload}) => {
      state.producto.modelo.push(payload)
    },

    deleteProducto: (state, {payload}) => {
      state.producto = state.producto.filter(c  => c.codigo !== payload)
    },

    updateModeloID: (state, {payload}) => {
      state.producto.modelos = payload
    },

    deleteModelo: (state, {payload}) => {
      state.producto.modelo = state.producto.modelo.filter(c  => c.id !== payload)
    },

    postCategoriaProductoId : (state,{payload}) => {
      state.producto.categoria.push(payload)
    },

    putCategoriaProductoId : (state,{payload}) => {
      state.producto.categoria = payload
    },

  }
})

// Action creators function  --> Son funciones que se disparan. Ya estan asociadas a las acciones del reducer
export const { getStatus,getCategorias, postCatgorias, updateCatgorias, deleteCategorias, postCategoriaProductoId, putCategoriaProductoId,
  getProductos, getProducto, postProducto, postModeloProductoId, deleteProducto, 
  deleteModelo, updateModeloID
  
} = adminSlice.actions;
