import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li> */}
            <li>
              <a
                href="https://github.com/kyleheidelberger"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            {/* <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/kyle-heidelberger/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:kyle.heidelberger@gmail.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/14_2jf9rkLeQG-25_Y7Qrr17M3dLUqL-x/view?usp=sharing" target="_blank" className="icon fa-file-text">
                <span className="label">Resumé</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Gatsby Starter Strata</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
