import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categorias: [],
  productos: [],
  producto: {}
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    
    getCategorias : (state, payload) => {
      state.categorias = payload
    },

    postCatgoria: (state, payload) => {
      state.categorias.push(payload)
    },

    updateCatgoria: (state, payload) => {
      state.categorias = payload
    },

    deleteCategoria: (state, payload) => {
      state.categorias = state.categorias.filter(c  => c.id !== payload)
      getCategorias()
    },

    getProductos: (state, payload) => {
      state.productos = payload
    },

    getProducto: (state, payload) => {
      state.producto = payload
    },

    postModeloProductoId : (state,payload) => {
      state.producto.modelo.push(payload)
    },

    deleteModelo: (state, payload) => {
      state.producto.modelo = state.producto.modelo.filter(c  => c.id !== payload)
    }
           
  }
})

// Action creators function  --> Son funciones que se disparan. Ya estan asociadas a las acciones del reducer
export const { getCategorias, postCatgoria, updateCatgoria, deleteCategoria, getProductos, getProducto, postModeloProductoId, deleteModelo } = adminSlice.actions;
