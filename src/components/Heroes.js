import React from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'

class Heroes extends React.Component {

  getHeroes() {
    return this.props.heroes || []
  }

  render() {
    return (
      <div style={{margin: 2+'em'}}>
        <h4>List of Heroes</h4>
        <ul className="todo-list">
          {this.getHeroes().map(hero =>
            <Hero key={hero.id} hero={hero} {...this.actions} />
          )}
        </ul>
      </div>
    )
  }
}

Heroes.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired)
}

export default Heroes
