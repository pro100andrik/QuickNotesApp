
function AddButton (props) {
  return <div className='add-button' onClick={props.handleAddNote}>
  <div className='line vertical' />
  <div className='line horisontal' />
  </div>
}

export default AddButton
