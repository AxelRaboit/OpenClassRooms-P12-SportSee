import style from './DataSource.module.scss';
import PropTypes from 'prop-types';

export const DataSource = (props) => {
  return (
    <div className={style.container}>
      <span className={style.dataLabel}>Using data from :</span>
      <span className={style.dataSource}> {props.source} </span>
    </div>
  );
}

DataSource.propTypes = {
  source: PropTypes.string.isRequired,
};

