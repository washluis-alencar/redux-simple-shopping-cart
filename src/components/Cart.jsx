import '../styles/cart.scss'
import {useDispatch, useSelector} from "react-redux";
import cartSlice from "../store/slices/cartSlice";
import {useMemo} from "react";

const Cart = () => {

  const {cart, product} = useSelector(state => state);
  const dispatch = useDispatch();
  const {removeFromCart, clearAllItems} = cartSlice.actions;

  const cartProducts = useMemo(() => {
    return product.data.filter(p => cart.cartProductIds.includes(p.id));
  }, [cart.cartProductIds]);

  return (
    <div className="cart">
      {cartProducts.length > 0 &&
        (<div className="cart-product">
          <h3 className="header">Items in cart</h3>
          {cartProducts.map((product) => (
            <div key={product.id} className="row">
              <img className="item-image" src={product.imageUrl} alt="product" />

              <div className="item-info">
                <h4>{product.name}</h4>
                <p className="text-truncate">{product.detail}</p>
                <button className="btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>
                  <i className="bi bi-trash-fill" /> Remove Item
                </button>
              </div>
            </div>
          ))}

          <footer className="text-center" onClick={() => dispatch(clearAllItems())}>
            <button className="btn btn-primary">CHECKOUT</button>
          </footer>
        </div>
        )}

      {cart.cartProductIds.length === 0 && (<div className="text-center empty-cart">
        <i className="bi bi-cart3"/>
        <p>Your cart is empty.</p>
        <p>You have not added any item to your cart.</p>
      </div>)}
    </div>
  )
}

export default Cart
