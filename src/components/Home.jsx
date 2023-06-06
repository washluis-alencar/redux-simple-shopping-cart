import '../styles/home.scss'
import {useDispatch, useSelector} from "react-redux";
import cartSlice from "../store/slices/cartSlice";
import {useEffect} from "react";
import {fetchAllProducts} from "../store/thunks/productThunk";

const Home = () => {
  const {cart, product} = useSelector((state) => state);
  const dispatch = useDispatch();
  const {addToCart, removeFromCart} = cartSlice.actions;

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  useEffect(() => {
    if (product.loading === 'error') {
      alert('error on fetching');
    }
  }, [product])

  return (
    <div className="container product-catalogue">
      <div className="row">
        {product.data.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <div className="card">
                <img className="card-img-top center-block" src={product.imageUrl} alt="Card cap" />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>

                  {!cart.cartProductIds.includes(product.id) && (<button className="btn btn-primary" onClick={() => dispatch(addToCart(product.id))}>Add to cart</button>)}
                  {cart.cartProductIds.includes(product.id) && (<button className="btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</button>)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
