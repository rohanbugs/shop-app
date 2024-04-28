import ProductComponent from "./components/ProductComponent";
import ProductListing from "./components/ProductListing";
import ProductDeatils from "./components/ProductDetails";


export const routes=[

    {path:"/" ,element:<ProductListing/>},
    {path:"productdetails/:productid",element:<ProductDeatils/>}
]