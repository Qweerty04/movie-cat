import React from 'react';
import style from './BlurOverlay.module.scss';


/**
 * Returns the angle wrapped to be within the range of 0 to 359 degrees.
 *
 * @param {number} angle - The angle to be wrapped.
 * @return {number} The angle wrapped within the range of 0 to 359 degrees.
 */
function wrapAngle(angle) {
    return angle % 360;
}

const BlurOverlay = (blurAngle, noBlurOnHover = true) => {
  return (
    <div className={`${style.container} ${noBlurOnHover ? style.fadeout : ""}`}>
      <img className="image" src="your-image.jpg" alt=""/>
      {[...Array(20)].map((_, i) => (
        <div key={i} className={`${style.blurOverlay} blr${i * 5}`} />
      ))}
      <div className="content">Blurred Image Content</div>
    </div>
  );
};

export default BlurOverlay;