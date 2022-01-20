import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import iconsClose from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { title, price, images } = product;
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className={styles.OrderItem}>
      <figure>
        <img src={images[0]} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img src={iconsClose} alt="close icon" onClick={() => removeFromCart(product)} />
    </div>
  );
};

export default OrderItem;
