import './index.scss'

const AnimatedLetters = ({ letterClass = 'text-animate', strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        /* assigns a span element to each character so that
    they can be uniquely targeted for animation when hovered */
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
