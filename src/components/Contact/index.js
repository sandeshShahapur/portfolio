import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
// eslint-disable-next-line
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const textStr = 'Contact me'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  const relForm = useRef()

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  /* takes an event object e as a parameter. It represents the form submission event.*/
  const sendEmail = (e) => {
    /*prevents the default form submission behavior, ensuring that the form doesn't trigger a page reload.*/
    e.preventDefault()

    emailjs
      .sendForm(
        'service_gy6b9q5',
        'template_c6qex0a',
        relForm.current,
        'fdSTkAHQ_nbyUm8UN'
      )
      .then(
        //promise-based syntax used for handling the response of the sendForm method. The first callback function is executed if the email is successfully sent, while the second callback function is executed if there's an error.
        () => {
          alert('Message successfully sent!')
          //This reloads the page, setting the parameter false to ensure it reloads from the cache rather than making a new request to the server.
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textStr}
              idx={15}
            />
          </h1>
          <p>
            I am eager to explore collaborative opportunities, particularly
            ambitious, engaging, and forward-thinking projects. However, I am
            also open to other questions or requests you may have. Please feel
            free to reach out to me using the contact form provided below. I am
            excited to collaborate and contribute to meaningful projects.
          </p>

          <div className="contact-form">
            <form ref={relForm} onSubmit={sendEmail}>
              <ul>
                {/*takes half of the row */}
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Sandesh Shahapur,
          <br />
          Bangalore, India.
          <br />
          <span>sandeshshahapur@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[12.9715987, 77.5945627]} zoom={7}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[12.9715987, 77.5945627]}></Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
