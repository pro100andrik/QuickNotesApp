import React from 'react';
import Note from './components/Note';
import AddButton from './components/AddButton';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      notes: this.props.myNotes
    })
  }

  handleRemoveNote = targetIndex => {
    this.setState(prevState => ({
      notes: prevState.notes.filter((element, index) => index !== targetIndex)
    }))
  }

  handleEditTextValue = (newText, targetIndex) => {
    this.setState(prevState => ({
      notes: prevState.notes.map((element, index) => {
        if (index === targetIndex) element.text = newText;
          return element
      })
    }))
  }

  handleAddNote = () => {
    this.setState({
      notes: [...this.state.notes, {text:'edit me', rotate: Math.floor(Math.random() * 4)}]
    })
  }

  render(){
    return (
      <>
      <AddButton handleAddNote={this.handleAddNote} />
      <div className='main-container'>
        <div className='notes-wrapper'>
          {this.state.notes.map((element, index) => {
            return <Note text={element.text}
                         key={index}
                         index={index}
                         rotate={element.rotate}
                         handleRemoveNote={this.handleRemoveNote}
                         handleEditNote={this.handleEditNote}
                         handleEditTextValue={this.handleEditTextValue} />
          })}
        </div>

      </div>
      </>

    )
  }
}

export default App;
