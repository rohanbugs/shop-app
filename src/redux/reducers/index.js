import {combineReducers} from'redux'
import { productReducer, selectedProduct } from './productReducers'

const rootReducer=combineReducers({
    allProducts:productReducer,
    product:selectedProduct
})
export default rootReducer