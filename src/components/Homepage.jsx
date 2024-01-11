import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import { addToWishlist } from './redux/slices/wishlistSlice';
import { addToCart } from './redux/slices/cartSlice';

function Homepage({fetchUrl}) {
    const base_url = "https://fakestoreapi.com/products";
    const [allProducts, setAllProducts] = useState ([])
    const dispatch = useDispatch()

    useEffect(() => {
      const cachedData = localStorage.getItem('allProducts');
      if (cachedData) {
        setAllProducts(JSON.parse(cachedData));
      } else {
        fetchData();
      }
    }, [fetchUrl]);
  
    const fetchData = async () => {
      try {
        const { data } = await tmdbAxiosInstance.get(fetchUrl);
        setAllProducts(data);
        localStorage.setItem('allProducts', JSON.stringify(data));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
  

  return (
    <div>
    <div className="row">
      {allProducts.map((item) => (
        <div className="col-lg-3 mb-3" key={item.id}>
          <div className="card">
            <img
              src={item.image}
              alt="no image"
              className="card-img-top"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '14px' }}>
                {item.title}
              </h5>
              <p className="card-text" style={{ fontSize: '12px' }}>
                ${item.price}
              </p>
              <div className="d-flex justify-content-between">
                <button
                  onClick={() => dispatch(addToWishlist(item))}
                  className="btn btn-light"
                  style={{ fontSize: '12px' }}
                >
                  <i className="fa-solid fa-heart text-danger"></i> Wishlist
                </button>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="btn btn-light"
                  style={{ fontSize: '12px' }}
                >
                  <i className="fa-solid fa-cart-plus text-success fa-1x"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Homepage