import './index.scss'
import '../Layout/index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  // for specidying the styling for each letter for animation when hovered
  const [letterClass, setLetterClass] = useState('text-animate')

  const name = 'andesh,'
  const jobText = 'To-Be full stack developer.'
  const nameArray = name.split('')
  const jobArray = jobText.split('')

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
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'m</span>
            <img src={LogoTitle} alt="S" height="100px" width="50px" />

            {/* for rendering our test characters with unique class names so that they can 
          be animated individually on loading with a delay (printing pattern)
          index is used to represent the delay we want for individual characters*/}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={24}
            />
          </h1>
          <h2>Pursuing CSE | Lets write the future together!</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
