import styles from './ProductOptions.module.scss';
import propTypes from 'prop-types';
import Button from '../Button/Button';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';

const ProductOptions = ({ props, currentColor, currentSize, addToCart, changeColor, changeSize }) => {

  return (
    <form onSubmit={addToCart}>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize props={props} currentSize={currentSize} changeSize={changeSize} />
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor props={props} currentColor={currentColor} changeColor={changeColor} />
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