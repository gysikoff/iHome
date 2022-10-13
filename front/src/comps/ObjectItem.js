import React, {useState} from 'react'
import ObjectEdit from './ObjectEdit'

let getObjectName = (object) => {
  return object.name.slice(0,25);
}

const ObjectItem = ({object, getObjects, roomId}) => {

  let [bEditObject, setEditObject] = useState(false);
  let [objectEdit, setObjectEdit] = useState(object);

  let onEdit = () => {
    setEditObject(!bEditObject);
  }

  let onAccept = () => {
    updateObject();
    onEdit();
  }

  let onClear = () => {
    onEdit();
  }

  let updateObject = async () => {
    await fetch(`http://localhost:8000/api/rooms/${roomId}/objects/${object.objectID}/update/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objectEdit)
    })
    getObjects();
  }

  let changeObjectState = async () => {
    object.state = !object.state;
    await fetch(`http://localhost:8000/api/rooms/${roomId}/objects/${object.objectID}/update/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    getObjects();
  }

  let deleteObject = async () => {
    await fetch(`/api/rooms/${roomId}/objects/${object.objectID}/delete/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    getObjects();
  }

  return (
      <div className='object-container'>
        {bEditObject
        ?<ObjectEdit object={object} onAccept={onAccept} onClear={onClear} setObjectEdit={setObjectEdit}/>
        :<>
        <div className='object-name'>{getObjectName(object)}</div>
        <div className='object-edit'>
          <span onClick={onEdit} className='object-edit-button'>&#9776;</span>
        </div>
        <div className='object-toggle'>
          <label className='object-switch'>
            <input checked={object.state} onChange={changeObjectState} type='checkbox'></input>
            <span className='object-slider'></span>
          </label>
        </div>
        <div className='object-delete'>
          <span className='object-delete-button' onClick={deleteObject}>&#10006;</span>
        </div>
        </>
        }
      </div>
  )
}

export default ObjectItem

