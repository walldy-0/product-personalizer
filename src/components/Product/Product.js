import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import shortid from 'shortid';
import { useState } from 'react';

const Product = props => {
  
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  
  const changeColor = e => setCurrentColor(e.target.getAttribute('data-color'));

  const changeSize = e => setCurrentSize(e.target.getAttribute('data-size'));

  const getPrice = () => props.basePrice + props.sizes.find(size => size.name === currentSize).additionalPrice;

  const addToCart = e => {
    e.preventDefault();

    console.log('Summary\n==============\nName: ' + props.title + '\nPrice: ' + getPrice()
      + '\nSize: ' + currentSize + '\nColor: ' + currentColor);
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={addToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={shortid()}><button type="button" data-size={size.name} onClick={changeSize} className={clsx(size.name === currentSize && styles.active)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li key={shortid()}><button type="button" data-color={color} onClick={changeColor}
                className={clsx({
                  [styles.colorBlack]: color === 'black',
                  [styles.colorBlue]: color === 'blue',
                  [styles.colorGreen]: color === 'green',
                  [styles.colorRed]: color === 'red',
                  [styles.colorWhite]: color === 'white'
                }, color === currentColor && styles.active)}></button></li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;