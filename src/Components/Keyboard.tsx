import styles from "./Keyboard.module.css"


const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  disabled?: boolean,
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetters: (letter: string) => void,
}

const Keyboard = ({ 
  disabled = false,
  activeLetters, 
  inactiveLetters, 
  addGuessedLetters
}: KeyboardProps) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)",
      gap: ".5rem",
    }}>
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInActive = inactiveLetters.includes(key)
        return (
        <button 
          onClick={() => addGuessedLetters(key)} 
          className={`
            ${styles.btn} 
            ${isActive ? styles.active : ""}
            ${isInActive ? styles.inactive : ""}
          `} 
          disabled = {isInActive || isActive || disabled}
          key={key}>
          {key}
        </button>
        )
      })}
    </div>
  )
}

export default Keyboard