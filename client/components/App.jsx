import React from 'react'

import robotsData from '../../robotsData'
import CardList from './CardList'
import SearchBox from './searchBox'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robotsData,
      searchField: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(e) {
    const searchField = e.target.value
    const filteredRobots = robotsData.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase())
    })
    this.setState({robots:filteredRobots})
  }
  render() {
    return (
      <div>
        <h1>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={this.state.robots} />
      </div>
    )
  }
}

export default App
