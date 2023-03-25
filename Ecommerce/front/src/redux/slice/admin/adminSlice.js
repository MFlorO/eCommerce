import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categorias: []
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    
    getCategorias : (state, payload) => {

      state.categorias = payload
    },

    updateCatgoria: (state, payload) => {
      state.categorias = payload
    }
           
  }
})

// Action creators function  --> Son funciones que se disparan. Ya estan asociadas a las acciones del reducer
export const { getCategorias, updateCatgoria } = adminSlice.actions;
