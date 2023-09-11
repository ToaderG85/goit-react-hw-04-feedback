import React from 'react';
import style from './Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className={style.message}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};