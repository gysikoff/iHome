import React, {useState} from 'react'

const ObjectCreate = ({roomFK, getObjects}) => {
  
    let [bCreate, setCreate] = useState(true);
    let [object, setObject] = useState({
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
        createObject();
    }

    let createObject = async () => {
        await fetch(`/api/rooms/${roomFK}/object/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        getObjects();
    }

  return (
    <div className='room-container-add'>
        {
            bCreate
            ? (<div className='add-object'>
                <span className='add-object-button' onClick={onCreate}>&#10010;</span>
            </div>)
            : (<div>
                <div className='add-object-fields-wrapper'>
                    <input type='text' className='add-object-field-name' defaultValue="name" onChange={(e) => {setObject({...object, 'name':e.target.value})}}></input>
                    <input type='text' className='add-object-field-desc' defaultValue="description" onChange={(e) => {setObject({...object, 'description':e.target.value})}}></input>
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

export default ObjectCreate