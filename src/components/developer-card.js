import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import style from "./developer-card.module.css"

const DeveloperCard = ({name, url, image}) => {
    return (
        <div className={style.card}>
            <div className={style.cardText}>
                <h3>{name}</h3>
                <p><a href={url} rel="noreferrer"
                      target='_blank'>{url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/$/, "")}</a>
                </p>
            </div>
            <div className={style.cardImage}>
                <a href={url} target='_blank' rel="noreferrer" >

                    {image ?
                        <GatsbyImage image={image.gatsbyImageData} alt={name}  /> :
                        <></>
                    }

                </a>
            </div>
        </div>
    );
};

DeveloperCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.object
};

export default DeveloperCard
