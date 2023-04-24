import React from 'react';
import PropTypes from 'prop-types';
import style from './Greetings.module.scss';

/**
 * Displays a greeting message and user's name
 * @param {Object} props - The props object containing user's name
 * @param {string} props.name - The user's name to be displayed
 * @returns {JSX.Element} - A React component that displays a greeting message and user's name
 */

export const Greetings = (props) => {
  const { name } = props;
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <span className={style.greetings}>Bonjour</span>
        <span className={style.name}>{name}</span>
      </div>
      <span className={style.message}>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </div>
  );
}

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
};
