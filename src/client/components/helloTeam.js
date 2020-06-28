import React from 'react'
import { connect } from 'react-redux'
import { store, changeMessage } from '../redux'
import Clock from 'react-live-clock';

export function HelloTeam (props) {
  return (
    <div className='hello-team'>
      <p>Hello Team!</p>
      <p>Current Time & Date: <Clock getcurrentdate="true" format={'h:mm:ss A, dddd, MMMM Mo, YYYY'} ticking={true}/></p>
    </div>
  )
}

// REACT-REDUX
// pass down responsive store state as props
const mapStateToProps = state => ({exampleMessage: state.exampleReducer.message})

// pass down dispatchers as props
const mapDispatchToProps = dispatch => ({changeMessage: txt => dispatch(changeMessage(txt))})

// hook up props with base component
const ConnectedTeam = connect(mapStateToProps, mapDispatchToProps)(HelloTeam)

// pass down store obj as direct props
const App = () => <ConnectedTeam store={store} />

export default App
