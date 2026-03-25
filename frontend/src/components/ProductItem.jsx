import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  // Ensure `image` is an array and has at least one element
  const productImage = image && image.length > 0 ? image[0] : '';

  // Format price to two decimal places
  const formattedPrice = parseFloat(price).toFixed(2);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img
          className='hover:scale-105 transition-transform ease-in-out duration-300'
          src={productImage}
          alt={name} // Use the product name as alt text for better accessibility
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {currency}
        {formattedPrice}
      </p>
    </Link>
  );
};

export default ProductItem;