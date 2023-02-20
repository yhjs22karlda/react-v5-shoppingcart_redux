import './Cart.css'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {removeProduct} from "../actions/cartActions"

export default function Cart({books}) {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const shoppinglist = state.map((i) => {
        return <li key={i} data-id={i}>
            <button className='li-button' onClick={(e) => handleXClick(e)}>X</button>
            <b>{books[i].title}</b> - {books[i].author}</li>
    })

    function handleCartClick(e) {
        e.target.previousSibling.classList.toggle("hidden")
    }
    function handleXClick(e) {
        let removeIndex = Number(e.target.parentElement.dataset.id)
        dispatch(removeProduct(removeIndex))
    }

    return (
        <div className='cart'>
            <div className='cart__items hidden'>
                <h3 className='cart__heading'>Tillagda produkter</h3>
                <ol className='cart__list'>
                    {shoppinglist}
                </ol>
            </div>
            <p className='cart__text' onClick={(e) => handleCartClick(e)}>Cart </p>
            <p className='cart__number'>{state.length}</p>
        </div>
    )
}