import styles from './ProductImage.module.scss';
import propTypes from 'prop-types';

const ProductImage = ({ props, color }) => {
  return (
    <div className={styles.imageContainer}>
    <img 
      className={styles.image}
      alt={props.title}
      src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${color}.jpg`} />
    </div>
  );
};

ProductImage.propTypes = {
  props: propTypes.object.isRequired,
  color: propTypes.string.isRequired
};

export default ProductImage;