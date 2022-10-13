import React, {useState, useEffect} from 'react';
import RoomItem from '../comps/RoomItem'
import RoomCreate from '../comps/RoomCreate';

const RoomsPage = () => {

    let [rooms, setRooms] = useState([]);

    useEffect(()=> {
        getRooms();
    }, []);

    let getRooms = async () => {
        let res = await fetch('/api/rooms/');
        let resJson = await res.json();
        setRooms(resJson);
    }


  return (
    <div className='rooms'>
        <div className='rooms-list'>
            {rooms.map((room, idx) => (
                <RoomItem key={idx} room={room} getRooms={getRooms}/>
            ))}
            <RoomCreate getRooms={getRooms}/>
        </div>
    </div>
  )
}

export default RoomsPage