import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image"

const DeveloperCard = ({name, url, image}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{url}</p>
            {image?.fixed &&
            <Img
                fixed={image.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                alt=""
            />}
        </div>
    )
};

DeveloperCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.node
};

export default DeveloperCard
