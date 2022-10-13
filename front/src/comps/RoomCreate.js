import React, {useState} from 'react'

const RoomCreate = ({getRooms}) => {

    let [bCreate, setCreate] = useState(true);
    let [room, setRoom] = useState({
        name: "name",
        description: "description"
    });

    let onCreate = () => {
        setCreate(!bCreate);
    }

    let onCreateClear = () => {
        setCreate(!bCreate);
    }

    let onCreateAccept = () => {
        setCreate(!bCreate);
        createRoom();
    }

    let createRoom = async () => {
        await fetch(`/api/rooms/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(room)
        })
        getRooms();
    }

  return (
    <div className='room-container-add'>
        {
            bCreate
            ? (<div className='add-room'>
                <span className='add-room-button' onClick={onCreate}>&#10010;</span>
            </div>)
            : (<div>
                <div className='add-room-fields-wrapper'>
                    <input type='text' className='add-room-field-name' defaultValue="name" onChange={(e) => {setRoom({...room, 'name':e.target.value})}}></input>
                    <input type='text' className='add-room-field-desc' defaultValue="description" onChange={(e) => {setRoom({...room, 'description':e.target.value})}}></input>
                </div>
                <div className='object-edit-float-accept'>
                    <span className='object-edit-float-accept-button' onClick={onCreateAccept}>&#10004;</span>
                </div>
                <div className='object-edit-float-clear'>
                    <span className='object-edit-float-clear-button' onClick={onCreateClear}>&#10006;</span>
                </div>
            </div>)
        }
    </div>
  )
}

export default RoomCreate