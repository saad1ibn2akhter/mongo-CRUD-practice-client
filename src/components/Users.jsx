import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUser = useLoaderData();
    const [users ,setUsers] = useState(loadedUser);
    console.log('loadedUser :' ,loadedUser);

    const handleDelete = id =>{
        console.log('id' ,id);

        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert(`User deleted . ID : ${id}`);
                const remaining = loadedUser.filter(user => user.id == id);
                setUsers(remaining);
            }
        })
    }

    return (
        <div>
            <h2>Total Users : {users.length}</h2>
           <div>
           {
             users.map(user => <><p key={user.id}>{user.name} *** {user.email} <Link to={`/Update/${user._id}`}><button>Update</button></Link>  <button onClick={()=> handleDelete(user._id)}>X</button></p></>)   
            }
           </div>
        </div>
    );
};

export default Users;