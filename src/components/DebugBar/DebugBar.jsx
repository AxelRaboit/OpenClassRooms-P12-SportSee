import style from './DebugBar.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoutIcon } from '../../assets/icon-logout.svg';

export const DebugBar = ({ dataSource, handleDataSourceChange }) => {

  const isChecked = dataSource === 'Mock Data';

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    handleDataSourceChange(isChecked);
  };

  return (
    <div className={style.container}>
      <div>
        <span className={style.dataLabel}>Using data from :</span>
        <span className={style.dataSource}> {dataSource} </span>
      <div className={style.containerCheckbox}>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span className={style.dataLabel}>
          Use Mock Data
        </span>
      </div>
      </div>
      <NavLink to="/" className={style.logoutLink}>
        <LogoutIcon width={20} className={style.logoutIcon} />
      </NavLink>
    </div>
  );
}

DebugBar.propTypes = {
  dataSource: PropTypes.string.isRequired,
  handleDataSourceChange: PropTypes.func.isRequired,
};
