// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {

    const [data, setData] = useState([]);
    // console.log(data)


    // const getData = () => {
    //     axios.get('http://localhost:8000/users')
    //         .then(res =>console.log(res))
    //         .catch(err => console.log(err))
    // }


    const getData = async () => {
        const res = await fetch('http://localhost:8000/users' , {
            method:"Get",
            headers: {"Content-Type": "application/json"}

    })
     const usersData = await res.json();
     setData(usersData)
     
    }



    const handelDelete = async(id) => {
        
       
            const res = await fetch(`http://localhost:8000/deleteUser/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }

            })
            const usersData = await res.json();                
        getData()
        alert(usersData.message)

    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            <h1>Contacts List (Read Operation)</h1>
            <Link to={'/createnewuser'} >
                <button style={{ margin: 15 }} type="button" class="btn btn-primary btn-lg">ADD NEW CONTACT</button>

            </Link>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.NO.</th>
                        <th scope="col">ID</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Zip</th>
                    </tr>
                </thead>
                <tbody>{
                    data.map((e, key) => {
                        return (
                            <tr>
                                <th scope="row">{key}</th>
                                <td>{e._id}</td>
                                <td>{e.Name}</td>
                                <td>{e.Lastname}</td>
                                <td>{e.Email}</td>
                                <td>{e.City}</td>
                                <td>{e.State}</td>
                                <td>{e.Zip}</td>
                                <Link to={`/update/${e._id}`} >
                                    <button style={{ margin: 10 }} type="button" class="btn btn-outline-warning">Edit</button></Link>

                                
                                    <button onClick={()=> handelDelete(e._id)}  type="button" class="btn btn-outline-danger">Delete</button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}

export default Read