import React from "react"

interface CardInfo {
  id: number
  title: string
  userName: string
  numViews: number
  numVotes: number
  numComments: number
  numHearts: number
  rank: number
  dateCreated: string
  colors: string[]
  description: string
  url: string
  imageUrl: string
  badgeUrl: string
  apiUrl: string
}

interface Prop {
  cardInfo: CardInfo
}

const Card: React.FC<Prop> = ({ cardInfo }) => {
  const getTimeString = (date: string | number | Date) => {
    const newDate = new Date(date)
    return newDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const createColorBlock = (color: string) => {
    return (
      <div
        className="color"
        style={{ backgroundColor: `#${color}` }}
        key={cardInfo.id + color}
      ></div>
    )
  }

  return (
    <div className="card">
      <div className="card-text">
        <div className="users">
          <div className="user">{cardInfo.title}</div>
          <div>
            by {cardInfo.userName} at {getTimeString(cardInfo.dateCreated)}
          </div>
        </div>
        <div className="votes">
          <div>{cardInfo.numViews} views</div>
          <div>{cardInfo.numVotes} votes</div>
        </div>
      </div>
      <div className="colors">
        {cardInfo.colors.map((color: any) => {
          return createColorBlock(color)
        })}
      </div>
    </div>
  )
}

export default Card
