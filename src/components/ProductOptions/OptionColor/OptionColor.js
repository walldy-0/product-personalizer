import styles from '../ProductOptions.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';
import propTypes from 'prop-types';

const OptionColor = ({ props, currentColor, changeColor }) => {
  return (
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
  );
};

OptionColor.propTypes = {
  props: propTypes.object.isRequired,
  currentColor: propTypes.string.isRequired,
  changeColor: propTypes.func.isRequired
};

export default OptionColor;