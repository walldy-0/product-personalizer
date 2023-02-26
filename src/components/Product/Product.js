import styles from './Product.module.scss';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
  
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  
  const changeColor = e => setCurrentColor(e.target.getAttribute('data-color'));

  const changeSize = e => setCurrentSize(e.target.getAttribute('data-size'));

  const getPrice = useMemo(() => {
    return props.basePrice + props.sizes.find(size => size.name === currentSize).additionalPrice;
  }, [currentSize]);

  const addToCart = e => {
    e.preventDefault();

    console.log('Summary\n==============\nName: ' + props.title + '\nPrice: ' + getPrice
      + '\nSize: ' + currentSize + '\nColor: ' + currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage props={props} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductOptions props={props} currentColor={currentColor} currentSize={currentSize} addToCart={addToCart} changeColor={changeColor} changeSize={changeSize} />
      </div>
    </article>
  )
};

export default Product;