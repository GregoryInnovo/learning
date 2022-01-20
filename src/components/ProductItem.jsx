import React, { useContext } from 'react';
import addToCardIcon from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { images, title, price } = product;

  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={images[0]} width={240} height={240} alt={title} />
      <div className={styles['product-info']}>
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={addToCardIcon} width={50} height={50} alt="icon to add" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
