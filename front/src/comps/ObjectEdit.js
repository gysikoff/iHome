import React from 'react'

const ObjectEdit = ({object, onAccept, onClear, setObjectEdit}) => {
  return (
    <div className='object-edit-float'>
        <div>
            <input type='text' className='object-edit-float-field' defaultValue={object.name} onChange={(e) => {setObjectEdit({...object, 'name':e.target.value})}}></input>
        </div>
        <div className='object-edit-float-accept'>
            <span className='object-edit-float-accept-button' onClick={onAccept}>&#10004;</span>
        </div>
        <div className='object-edit-float-clear'>
            <span className='object-edit-float-clear-button' onClick={onClear}>&#10006;</span>
        </div>

    </div>
  )
}

export default ObjectEdit