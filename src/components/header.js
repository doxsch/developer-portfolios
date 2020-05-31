import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "./logo.svg"

const Header = ({siteTitle}) => (
    <header
        style={{
            marginBottom: `1rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                display: 'flex',
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <div style={{width: '3rem', height: 'auto', display: 'flex'}}>
                <img style={{margin: 0}} src={logo} alt='logo'/>
            </div>
            <div style={{paddingLeft: '0.8rem'}}>
                <h1 style={{margin: 0}}>
                    <Link
                        to="/"
                        style={{
                            color: `black`,
                            textDecoration: `none`,
                        }}
                    >
                        {siteTitle}
                    </Link>
                </h1>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
