import React from 'react'
import Card from './Card'
import AddRobotForm from './AddRobotForm'

const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot, i) => {
    return (
      <React.Fragment>
      <AddRobotForm/>
      <Card
        key={i}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
      </React.Fragment>
    )
  })
  return <div>{cardComponent}</div>
}

export default CardList
