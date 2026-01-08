import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

const initialState = {
  mode:'light',
  menu:'open-menu',
  cart:'open-cart',
}

const themeSlice = createSlice({
  name:'theme',
  initialState,
  reducers:{
    toggleMode:(state)=>{
      state.mode= state.mode === 'light'?'dark':'light';
    },
    menuBtn:(state)=>{
      state.menu= state.menu === 'open-menu'?'closed-menu':'open-menu';
    },
    cartBtn:(state)=>{
      state.cart=state.cart==='open-cart'?'closed-cart':'open-cart'
    }

  }

})

export const{toggleMode,menuBtn,cartBtn}=themeSlice.actions
export default themeSlice.reducer