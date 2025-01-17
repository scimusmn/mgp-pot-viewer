/* eslint-disable import/prefer-default-export */
// Don't require a default export. Gatsby's API can't support it here.
import PropTypes from 'prop-types';
import './src/styles/index.css';

export function wrapRootElement({ element }) {
  return element;
}

wrapRootElement.propTypes = {
  element: PropTypes.element.isRequired,
};
