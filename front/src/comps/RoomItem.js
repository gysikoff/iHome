import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import RoomEdit from './RoomEdit'

let getRoomName = (room) => {
  return room.name.slice(0, 25);
}

const RoomItem = ({room, getRooms}) => {

  let [roomEdit, setRoomEdit] = useState(room);

  let [bEdit, setEdit] = useState(false);

  let onEdit = () => {
    setEdit(!bEdit);
  }

  let onAccept = () => {
    updateRoom();
    setEdit(!bEdit);
  }

  let onClear = () => {
    setEdit(!bEdit);
  }

  let updateRoom = async () => {
    await fetch(`http://localhost:8000/api/rooms/${roomEdit.roomID}/update`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(roomEdit)
    })
    getRooms();
  }

  let deleteRoom = async () => {
    await fetch(`/api/rooms/${room.roomID}/delete/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    getRooms();
  }

  return (
    <div className='room-container'>
      {bEdit  
      ?<RoomEdit room={roomEdit} onAccept={onAccept} onClear={onClear} setRoomEdit={setRoomEdit}/>
      :<>
      <div className='room-url'>
      <Link to={`/rooms/${room.roomID}`}>
        <h3 className='room-name'>{getRoomName(room)}</h3>
      </Link>
      </div>
      <div className='room-edit'>
        <span className='room-edit-button' onClick={onEdit}>&#9776;</span>
      </div>
      <div className='room-delete'>
        <span className='room-delete-button' onClick={deleteRoom}>&#10006;</span>
      </div>
      </>
      }
    </div>
  )
}

export default RoomItem