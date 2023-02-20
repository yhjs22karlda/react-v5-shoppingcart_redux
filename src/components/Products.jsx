import './Products.css'
import {useOutletContext} from "react-router-dom"
import {useSelector} from "react-redux"
import {useDispatch} from 'react-redux'
import {addProduct} from "../actions/cartActions"

export default function Products() {
    const data = useOutletContext()
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(state);

    const products = data.map((item, i) => {
        return (
            <div className="product" key={i}>
                <h2 className='product__title'>{item.title}</h2>
                <p className='product__author'>Av {item.author}</p>
                <p className='product__text'>{item.text}</p>
                <button
                    className={`button ${state.includes(i)?"red":''}`}
                    onClick={() => {dispatch(addProduct(i))}}>Add to cart
                </button>
            </div>
        )
    })

    return (
    <div className='product-container'>
        {products}
    </div>
    )
}
