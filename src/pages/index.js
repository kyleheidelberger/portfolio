import React from 'react'
import Helmet from 'react-helmet'
import Slider from 'react-slick'

import Layout from '../components/layout'
import SimpleSlider from '../components/SimpleSlider'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  // {
  //   id: '1',
  //   source: full01,
  //   thumbnail: thumb01,
  //   caption: 'decidOR',
  //   link: 'https://decidor.herokuapp.com',
  //   description:
  //     'decidOR provides a guided experience that enables users to easily make common decisions when faced with an overwhelming amount of choices. This app was built over two weeks with three fellow developers at Momentum, using Vue.js.',
  // },
  {
    id: '1',
    source: full02,
    thumbnail: thumb02,
    caption: 'iTunes Library Search',
    link: 'https://github.com/kyleheidelberger/itunes-search',
    description:
      'The iTunes Search app allows users to type in a variety of search terms (song title, artist, album, etc.) and play 30-second previous from the iTunes library. This app was built by using fetch to access the public iTunes Library API and plain JavaScript to display information received and play song samples.',
  },
  {
    id: '2',
    source: full03,
    thumbnail: thumb03,
    caption: 'Freeshelf',
    link: 'https://freeshelf-library.herokuapp.com',
    description:
      'The Freeshelf Library allows users to find a variety of publicly availably books on various programming languages and technology-related topics. Users are also able to favorite books in order to return to them later. This app was using the Django framework and SQLite database along with Bootstrap for CSS styling.',
  },
  {
    id: '3',
    source: full04,
    thumbnail: thumb04,
    caption: 'Habit Tracker',
    link: 'https://github.com/kyleheidelberger/habit-tracker',
    description:
      'The Habit Tracker app allows users to enter a habit they would like to accomplish and subsequently enter daily records and receive feedback on whether or not they achieved their goal that day. This app was created as part of a pair programming project alongside Daiane da Silva. The app uses Python/Django for backend and Tachyons for CSS syling.',
  },
  {
    id: '4',
    source: full05,
    thumbnail: thumb05,
    caption: 'Stack Otterflow',
    link: 'https://stack-otterflow.herokuapp.com',
    description:
      "A 'Stack Overflow' like website for users to ask questions and leave answers about everyone's favorite furry, wet mammal. The app was created using Django, JavaScript, and JQuery with two fellow Momentum students.",
  },
  {
    id: '5',
    source: full06,
    thumbnail: thumb06,
    caption: 'Pig Game',
    link: 'https://play-pig.surge.sh',
    description:
      "A simple version of the game 'Pig' built in vanilla JavaScript as part of a Udemy tutorial.",
  },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Kyle Heidelberger - Portfolio'
    const siteDescription =
      'Web Portfolio for full-stack developer Kyle Heidelberger'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Welcome to my portfolio!</h2>
            </header>
            <p>
              I'm Kyle. I'm a full-stack developer in North Carolina seeking new
              opportunities to develop my skills and contribute to an excellent
              organization. I recently gratuated from the immersive development
              program at Momentum Learning and have developed skills with
              Python, Django, Vue.js. React.js, and numerous other languages,
              frameworks, and technologies.
            </p>
            <p>
              Outside of work, I enjoy walking my two dogs, playing video games,
              and exploring the state with my amazing wife.
            </p>
            {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
          </section>

          <section id="two">
            <h2>decidOR</h2>
            <SimpleSlider />
            <br />
            <br />
            <h3>About the App</h3>
            <p>
            <a href="https://decidor.herokuapp.com" target="_blank">decidOR</a> provides a guided experience that enables users to easily
              make a variety of common decisions when faced with an overwhelming
              amount of choices. Our application simplifies this process by
              presenting two options at a time, in order for the user to reach
              an ultimate decision.
            </p>
            <h3>Creating the App</h3>
            <p>
              This app was built over the course of two weeks along with three
              fellow developers: 
              <a href="https://github.com/bennykoval"> Benny Koval</a>, 
              <a href="https://github.com/dwcope3"> Daniel Cope</a>, and 
              <a href="https://github.com/seanthony13"> Sarah Anthony</a>. The
              app utilizes various technologies, including Django/Python for
              backend, a Postgresql database, Vue.js/JavaScript for frontend and
              primary functionality, Sassy CSS for styling and responsive mobile
              design, Axios for API request, Amazon Web Services for image
              hosting, and more.
            </p>
            <h3>Momentum Demo Day Presentation</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/R9IA_WizMJI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </section>

          <section id="three">
            <h2>Other Recent Projects</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, source, thumbnail, caption, link, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  link,
                  description,
                })
              )}
            />

            {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
          </section>

          {/*<section id="three">
                        <h2>Get In Touch</h2>
                        <p>Send me an e-mail if you'd like to learn more about any of my projects!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                     <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li> 
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        315-395-3257
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:kyle.heidelberger@gmail.com">kyle.heidelberger@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section> */}
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
