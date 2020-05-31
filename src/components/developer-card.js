import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image"
import style from "./developer-card.module.css"
import DefaultImage from "./default-image";

const DeveloperCard = ({name, url, image}) => {
    return (
        <div className={style.card}>
            <div className={style.cardText}>
                <h2>{name}</h2>
                <p><a href={url}
                      target='_blank'>{url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/$/, "")}</a>
                </p>
            </div>
            <div className={style.cardImage}>
                <a href={url} target='_blank'>

                    {image ?
                        <Img
                            fluid={image.fluid}
                            alt={name}

                        /> :
                        <DefaultImage/>
                    }

                </a>
            </div>
        </div>
    )
};

DeveloperCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.object
};

export default DeveloperCard
