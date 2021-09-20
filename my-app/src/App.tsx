import React from "react"

import Card from "./card/Card"

import "./App.css"

import { dummyData } from "./MockData"

function App() {
  const [colors, setColors] = React.useState(dummyData)

  return (
    <div className="App">
      <div className="date-header">Last Updated at 3:25 PM</div>
      <div className="container">
        <div className="header">
          ColourLovers. <span className="header-sub">Live.</span>
        </div>
        <div className="mobile-date-header">Last Updated at 3:25 PM</div>
        <div className="cards-container">
          {colors.map((card) => (
            <Card cardInfo={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
