import { connect } from 'react-redux'
import Header from '../components/Header'
import { getAll } from '../actions'

export default connect(null, { getAll })(Header)
