import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from './redux/slices/cartSlice';


function Cart() {
    const cartArray = useSelector((state) => state.cartReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
  
    const getCartTotal = () => {
      if (cartArray.length > 0) {
        setTotal(cartArray.map(item => item.price).reduce((p1, p2) => p1 + p2));
      } else {
        setTotal(0);
      }
    };
  
    useEffect(() => {
      getCartTotal();
    }, [cartArray]);
  
    const handleCart = () => {
      alert("Order successfully placed. Thank you for purchasing with us.");
      navigate('/cart');
      
    };
  return (
    <div style={{ marginTop: '100px' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {cartArray.length > 0 ? (
        cartArray.map((product, index) => (
          <div key={index} style={{ width: '300px', border: '1px solid #ccc', 
          padding: '15px', borderRadius: '10px' }}>
            <img src={product?.image} alt={product?.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{product?.title}</h3>
           
            <h5>${product?.price}</h5>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              
              <button
                onClick={() => dispatch(removeFromCart(product.id))}
                style={{
                  padding: '8px',
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                }}
              >
                <i className="fa-solid fa-trash fa-2x"></i>
              </button>
              {/* <button
                onClick={() => dispatch(handleCart(product.id))}
                style={{
                  padding: '8px',
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                }}
              >
                <p>Place order</p>
              </button> */}
            </div>
          </div>
        ))
      ) : (
        <p className="text-danger fw-bolder fs-4">Nothing to display</p>
      )}
    </div>
  </div>  )
}

export default Cart