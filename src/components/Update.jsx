import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');

        const unchangedUser = {name , email};
        console.log(unchangedUser);

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify(unchangedUser),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }

    return (
        <div>
            <h1>Udate Profile : {loadedUser.name}</h1>
            <form action="" onSubmit={handleUpdate}>

                <input type="text" name="name" id="" defaultValue={loadedUser.name} />    <br />
                <input type="email" name="email" id="" defaultValue={loadedUser.email} />    <br />

                <input type="submit" value="Update" />

            </form>
        </div>
    );
};

export default Update;