import React from "react";
import PropTypes from "prop-types";

import style from "./letter.module.css"

const Letter = ({letter}) => {
    return (
        <div className={style.letterContainer}>
            <div className={style.letterCircle}>
                <span className={style.letterText}>{letter}</span>
            </div>
        </div>
    )
};

Letter.propTypes = {
    letter: PropTypes.string.isRequired,
};

export default Letter
