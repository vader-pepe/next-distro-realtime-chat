import { createSlice, AnyAction, PayloadAction } from '@reduxjs/toolkit'

const authenticationSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {
        addToCart: (state, action) => {
            state = action.payload
        },
        changeTopLevelTab: (state, action) => {
            state = action.payload
         },
        changeLowLevelTab: (state, action) => {
            state = action.payload
         },
        selectNewProduct: (state, action) => { 
            state = action.payload
        },
        changeOrderQuantity: (state, action) => { 
            state = action.payload
        },
        selectNewProductColor: (state, action) => { 
            state = action.payload
        },
        uploadImageInit: (state, action) => { 
            state = action.payload
        },
        clickAddToCart: (state, action) => { 
            state = action.payload
        },
    },
    extraReducers: (builder) => {

    },
})

export const {
    addToCart,
    changeTopLevelTab,
    changeLowLevelTab,
    selectNewProduct,
    changeOrderQuantity,
    selectNewProductColor,
    uploadImageInit,
    clickAddToCart,
} = authenticationSlice.actions
export default authenticationSlice.reducer
