import { useState } from 'react'

const Header = () => {
  return ( <h1>Anna palautetta</h1>)
}

const Buttons = ({ good, neutral, bad, setGood, setNeutral, setBad }) => {
  return (
    <>
      <button onClick={() => setGood(good + 1)}>Hyvä {good}</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutraali {neutral}</button>
      <button onClick={() => setBad(bad + 1)}>Huono {bad}</button>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100

  if (total === 0) {
    return (
      <>
        <h1>Tilastot</h1>
        <p>Ei yhtään palautetta annettu</p>
      </>
    )
  }
  return (
    <table>
      <tbody>
      <tr>
        <th>Tilastot</th>
      </tr>
      <tr>
        <th>Hyvä</th><td>{good}</td> 
      </tr>
      <tr>
        <th>Neutraali</th><td>{neutral}</td>
      </tr>
      <tr>
        <th>Huono</th><td>{bad}</td>
      </tr>
      <tr>
        <th>Yhteensä</th><td>{total}</td>
      </tr>
      <tr>
        <th>Keskiarvo</th><td>{average}</td>
      </tr>
      <tr>
        <th>Positiivinen</th><td>{positive} %</td>
      </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  return (
    <div>
    <Header />
    <Buttons good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App