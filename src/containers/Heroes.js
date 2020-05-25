import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import Heroes from '../components/Heroes'
import { getAllHeroes } from '../selectors'
import md5 from "js-md5"
import fetch from 'cross-fetch'
import { trackPromise } from 'react-promise-tracker';
import { Spinner } from '../components/spinner'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

class HeroesContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      searchTerm: ''
    };
    this.heroes = []
  }

  handleChange(event){
    const term = event.target.value

    this.setState({ searchTerm: term });

    this.heroes = this.state.heroes.filter(h => h.name.includes(term))
  };

  componentDidMount() {
    this.retrieveHeroes()
  }

  async retrieveHeroes() {

    // TODO: move keys to .env or AWS Secret
    const publicKey = '30d0a82c73d7b77eb73af7cbeec001e8'
    const privateKey = 'e8d123dc921b311a3727d3dd8fa476b7fa0767ad'
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + privateKey + publicKey);

    return trackPromise(
      fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=10&apikey=${publicKey}&hash=${hash.hex()}`)
        .then(function(response){
          if (!response.ok) {
            console.log('error on api request')
          }
          return response.json();
        })
        .then(response => {

          this.defineHeroes(response.data.results)
          return response;
        })
        .catch(error => {
          console.log('error on api fetch', error); //eslint-disable-line
        })
    );
  }

  defineHeroes(data) {
    this.heroes = data
    this.setState({heroes: data});
  }

  render() {
    const heroes = this.heroes

    return (
      <div>
        <Spinner />
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={this.state.searchTerm}
            onChange={(e) => this.handleChange(e)}
          />
        </FormControl>
        <Heroes heroes={heroes}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  heroes: getAllHeroes(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroesContainer)
