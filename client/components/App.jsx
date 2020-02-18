import React from 'react'

import robots from '../../robotsData'
import CardList from './CardList'
import SearchBox from './searchBox'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange(e) {
    console.log(e.target.value)
  }
  render() {
    return (
      <div>
        <h1>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={robots} />
      </div>
    )
  }
}

export default App
