import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>I'm <strong>Kyle Heidelberger</strong>,<br />
                    a Full-Stack developer<br />
                    with a passion for<br />
                    learning new technologies<br />
                    and solving new problems.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
