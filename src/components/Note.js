import React from 'react';
import trash from "./Trash.png" ;

class Note extends React.Component {
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
  }

  handleDeleteClick = () => {
    this.props.handleRemoveNote(this.props.index)
  }

  handleChange = e => {
    this.props.handleEditTextValue(e.target.textContent, this.props.index);
  }

  handleKeyDown = e => {
    if (e.code === 'Enter') {
      e.target.blur();
    }
  }

  render() {
    return (
      <div className={'note rotate' + this.props.rotate}>

        <span className='note-text'
              contentEditable="true"
              suppressContentEditableWarning={true}
              onBlur={this.handleChange}
              onKeyDown={this.handleKeyDown}
              ref={this.inputRef}>

          {this.props.text}
        </span>
      <div className='delete-button' onClick={this.handleDeleteClick}>
      <img src={trash} alt="trashBin"/>
      </div>
      </div>
    )
  }
}

export default Note
