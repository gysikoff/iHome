import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import ObjectItem from '../comps/ObjectItem'
import ObjectCreate from '../comps/ObjectCreate'

const RoomPage = ({ match }) => {

    let params = useParams();

    let [room, setRoom] = useState(null);
    let [objects, setObjects] = useState([]);

    useEffect(()=>{
        getRoom();
        getObjects();
    }, [params.id]);

    let getRoom = async () => {
        let res = await fetch(`/api/rooms/${params.id}`);
        let resJson = await res.json();
        setRoom(resJson);
    }

    let getObjects = async () => {
      let res = await fetch(`/api/rooms/${params.id}/objects`);
      let resJson = await res.json();
      setObjects(resJson);
    }
    

  return (
    <div className='objects'>
      <div className='objects-list'>
          <div className='room-header'>
            <Link to="/">
              <span className='back-button'>&#10094;</span>
            </Link>
            <b className='name-header'>{room?.name}</b>

          </div>
          {objects.map((object, idx) => (
            <ObjectItem key={idx} object={object} getObjects={getObjects} roomId={params.id}/>
          ))}
          <ObjectCreate roomFK={params.id} getObjects={getObjects}/>
      </div>
    </div>
  )
}

export default RoomPage