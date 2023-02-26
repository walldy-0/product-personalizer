import styles from '../ProductOptions.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';
import propTypes from 'prop-types';

const OptionSize = ({ props, currentSize, changeSize }) => {
  return (
    <ul className={styles.choices}>
      {props.sizes.map(size => <li key={shortid()}><button type="button" data-size={size.name} onClick={changeSize} className={clsx(size.name === currentSize && styles.active)}>{size.name}</button></li>)}
    </ul>
  );
};

OptionSize.propTypes = {
  props: propTypes.object.isRequired,
  currentSize: propTypes.string.isRequired,
  changeSize: propTypes.func.isRequired
};

export default OptionSize;