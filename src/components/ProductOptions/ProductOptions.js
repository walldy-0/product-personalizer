import styles from './ProductOptions.module.scss';
import shortid from 'shortid';
import propTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../Button/Button';
import OptionSize from './OptionSize/OptionSize';

const ProductOptions = ({ props, currentColor, currentSize, addToCart, changeColor, changeSize }) => {

  return (
    <form onSubmit={addToCart}>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          <OptionSize props={props} currentSize={currentSize} changeSize={changeSize} />
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
  );
};

ProductOptions.propTypes = {
  props: propTypes.object.isRequired,
  currentColor: propTypes.string.isRequired,
  currentSize: propTypes.string.isRequired,
  addToCart: propTypes.func.isRequired,
  changeColor: propTypes.func.isRequired,
  changeSize: propTypes.func.isRequired
};

export default ProductOptions;