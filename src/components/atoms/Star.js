import React from "react";
import {StarIcon} from "components/atoms/Iconset";
import style from "./Star.module.scss";

const Star = ({ratio}) => {
    return (
        <div className="starContainer">
            <StarIcon className={`${style.starOutline} ${style.star}`} index={Math.floor(+ratio)} />
            <StarIcon className={`${style.starInside} ${style.star}`} index={Math.floor(+ratio)} />
        </div>
    )
}

const Rating = ({rating}) => {
    return (
        <div className="ratingContainer"><Star ratio={rating}/></div>
    )
}

export default Rating;