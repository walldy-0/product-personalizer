import styles from '../ProductOptions.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionSize = ({ props, currentSize, changeSize }) => {
  return (
    <div>
    {props.sizes.map(size => <li key={shortid()}><button type="button" data-size={size.name} onClick={changeSize} className={clsx(size.name === currentSize && styles.active)}>{size.name}</button></li>)}
    </div>
  );
};

export default OptionSize;