import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import styles from '@styles/MyOrder.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '@icons/flechita.svg';

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const SumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={ArrowIcon} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${SumTotal()}</p>
        </div>
        <Link href="/checkout" className={styles['primary-button']}>
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
