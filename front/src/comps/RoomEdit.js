import React from 'react'

const RoomEdit = ({room, onAccept, onClear, setRoomEdit}) => {
  return (
    <div className='room-edit-float'>
        <div>
            <input type='text' className='room-edit-float-field' defaultValue={room.name} onChange={(e) => {setRoomEdit({...room, 'name':e.target.value})}}></input>
        </div>
        <div className='room-edit-float-accept'>
            <span className='room-edit-float-accept-button' onClick={onAccept}>&#10004;</span>
        </div>
        <div className='room-edit-float-clear'>
            <span className='room-edit-float-clear-button' onClick={onClear}>&#10006;</span>
        </div>

    </div>
  )
}

export default RoomEdit