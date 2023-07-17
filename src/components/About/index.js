import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faC, faRepublican } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const textStr = 'About me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textStr}
              idx={15}
            />
          </h1>
          <p>
            As a first-year student pursuing CSE, I am eager to explore the vast
            world of software engineering and contribute to innovative projects.
            Throughout my journey, I am dedicated to continuous learning, honing
            my skills, and collaborating with like-minded individuals to create
            impactful solutions.
          </p>
          <p>
            I possess a sense of quiet confidence, innate curiosity, and a
            perpetual commitment to enhancing my skills by tackling challenges
            one at a time.
          </p>
          <p>
            I am eager to apply my knowledge, passion, and dedication to make a
            positive impact in the field of computer science and create
            solutions that enhance people's lives.
          </p>
        </div>

        <div className="stage-cube-cont">
          {/*will hold six sides of the cube with different icons*/}
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#EC2025" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faRepublican} color="#31648C" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faC} color="#00589C" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
