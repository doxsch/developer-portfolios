import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "./logo.svg"
import twitterIcon from './tw_logo.svg';
import githubIcon from './gh_logo.svg';

const Header = ({siteTitle}) => (
    <header
        style={{
            marginBottom: `1rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 1024,
                display: 'flex',
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <div style={{width: '3rem', height: 'auto', display: 'flex'}}>
                <img style={{margin: 0}} src={logo} alt='logo'/>
            </div>
            <div style={{paddingLeft: '0.8rem', flex: 1}}>
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
            <div style={{display: 'flex', alignSelf: 'start'}}>
                <a href='https://twitter.com/doxsch' target='_blank' rel='noopener noreferrer'>
                    <div style={{width: '1.6rem', height: 'auto', display: 'flex'}}>
                        <img style={{margin: 0}} src={twitterIcon} alt='twitter icon'/>
                    </div>
                </a>&nbsp;
                <a href='https://github.com/doxsch/developer-portfolios' target='_blank' rel='noopener noreferrer'><div style={{width: '1.6rem', height: 'auto', display: 'flex'}}>
                    <img style={{margin: 0}} src={githubIcon} alt='github icon'/>
                </div>
                </a>
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
