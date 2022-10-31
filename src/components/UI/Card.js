import React from 'react';

import "./Card.css";

/**
 * Custom component to apply as a container component instead of div.
 * Wraps the content it is surrounding and applies additional styling.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Card = (props) => {

   // Adds additional styling from parents className parameter to existing Card class style
  const classes = 'card ' + props.className;

  /**
   * Children prop refers to content between open and close tags of the custom component.
   * Hence it returns the content wrapped by Card component
   */
  return <div className={classes}>{props.children}</div>;
}

export default Card;