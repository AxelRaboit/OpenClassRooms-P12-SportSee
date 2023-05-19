import style from './NutriCard.module.scss';
import PropTypes from 'prop-types';

/**
 * Displays a nutrition card
 *
 * @property {Object} children - SVG elements to display icon
 * @property {string} value - The nutrition value to be displayed in the card
 * @property {string} nutrition - The type of nutrition to be displayed in the card
 * @returns {React.ReactElement} - React component that displays a nutrition card
 */

export const NutriCard = (props) => {
  return (
    <div className={style.cardWrap}>
      <div className={style.iconWrap}>{props.children}</div>
      <div className={style.nutritionInfo}>
        <span className={style.nutriValue}>{props.value}</span>
        <span className={style.nutrition}>{props.nutrition}</span>
      </div>
    </div>
  );
}

NutriCard.propTypes = {
  children: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  nutrition: PropTypes.string.isRequired,
};
