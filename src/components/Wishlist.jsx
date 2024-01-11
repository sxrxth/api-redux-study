import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeFromWishlist } from './redux/slices/wishlistSlice'

function Wishlist() {
    const wishlistArray = useSelector((state) => state.wishlistReducer);
    const dispatch = useDispatch();
  
    const handleWishlistCart = (product) => {
      // dispatch(addToCart(product));
      dispatch(removeFromWishlist(product.id));
    };
    console.log(wishlistArray);
  return (
    <div style={{ marginTop: '100px' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {wishlistArray.length > 0 ? (
        wishlistArray.map((product, index) => (
          <div key={index} style={{ width: '300px', border: '1px solid #ccc', 
          padding: '15px', borderRadius: '10px' }}>
            <img src={product?.image} alt={product?.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{product?.title}</h3>
           
            <h5>${product?.price}</h5>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              
              <button
                onClick={() => handleWishlistCart(product)}
                style={{
                  padding: '8px',
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                }}
              >
                <i className="fa-solid fa-trash fa-2x"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-danger fw-bolder fs-4">Nothing to display</p>
      )}
    </div>
  </div>
  )
}

export default Wishlist