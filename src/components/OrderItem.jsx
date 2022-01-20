import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import iconsClose from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';
import Image from 'next/image';
const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.images[0]} width={240} height={240} alt={product?.title} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={iconsClose} alt="close icon" onClick={() => removeFromCart(product)} />
    </div>
  );
};

export default OrderItem;
