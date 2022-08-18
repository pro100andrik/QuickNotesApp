import React from 'react';
import Note from './components/Note';
import AddButton from './components/AddButton';

import './App.css';


const MYNOTES = ["This is notes","Add you own","Or edit existed"];


const myStorage = window.localStorage;

class App extends React.Component {
  constructor(props){
    super(props);
    const notes = [];
    if (!myStorage.getItem('quickNotesNotes')){
      notes.push(...MYNOTES);
      myStorage.setItem('quickNotesNotes', notes.join('+-+-+-+'))
    }else{
      const localStoreNotes = myStorage.getItem('quickNotesNotes').split('+-+-+-+')
      notes.push(...localStoreNotes)
    }
    this.state = ({
      notes: notes.map(element => {
        return {text: element, rotate: Math.floor(Math.random() * 4)}
      })
    })
  }

  handleRemoveNote = targetIndex => {
    this.setState(prevState => ({
      notes: prevState.notes.filter((_, index) => index !== targetIndex)
    }), this.updateLocalstore)
  }

  updateLocalstore = () => {
    const newNotes = this.state.notes.map(element => {
      return element.text
    })
    myStorage.setItem('quickNotesNotes', newNotes.join('+-+-+-+'))
  }

  handleEditTextValue = (newText, targetIndex) => {
    this.setState(prevState => ({
      notes: prevState.notes.map((element, index) => {
        if (index === targetIndex) element.text = newText;
          return element
      })
    }), this.updateLocalstore)
  }

  handleAddNote = () => {
    this.setState({
      notes: [...this.state.notes, {text:'edit me', rotate: Math.floor(Math.random() * 4)}]
    }, this.updateLocalstore)
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
