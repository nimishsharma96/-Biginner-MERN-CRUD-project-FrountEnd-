
import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router';



const Update = () => {

    const Id = useParams();
    const userId = Id.id

    const [data, setData] = useState({})


    const navigate = useNavigate();



    useEffect(() => {

        const getData = async () => {
            const res = await fetch(`http://localhost:8000/user/${userId}`, {
                method: "Get",
                headers: { "Content-Type": "application/json" }

            })
            const usersData = await res.json();
            //  console.log(usersData)
            setData(usersData)

        }
        getData()

    }, [userId])


    const handleChange = (e) => {
        const { name, value } = e.target

        setData((prev) => ({
            ...prev,
            [name]: value

        }))
    }




    const handleUpdate = async (e) => {
        e.preventDefault();
        const { Name, Lastname, Email, City, State, Zip } = data;

        const res = await fetch(`http://localhost:8000/updateUser/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name, Lastname, Email, City, State, Zip
            })

        })


        const resData = await res.json();
        alert(resData.message)
        if(Name && Lastname && Email && City && State && Zip){
            navigate('/')
        }
    }

    return (
        <>
            <h1>UPDATE YOUR FORM (PUT/PATCH Opreration)</h1>
            <Link to={'/'} >
                <button style={{ margin: 15 }} type="button" class="btn btn-primary btn-lg">HOME</button>

            </Link>

            <div class="border border-primary" style={{ padding: 50 }} >

                <form class="row g-3"  >
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input type="text" class="form-control" id="inputEmail4"
                            onChange={handleChange}
                            name='Name' value={data.Name} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Lastname</label>
                        <input type="text" class="form-control" id="inputEmail4"
                            onChange={handleChange}
                            name='Lastname' value={data.Lastname} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"
                            onChange={handleChange}
                            name='Email' value={data.Email} />
                    </div>


                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity"
                            onChange={handleChange}
                            name='City' value={data.City} />
                    </div>

                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">State</label>
                        <input type="text" class="form-control" id="inputCity"
                            onChange={handleChange}
                            name='State' value={data.State} />
                    </div>


                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip"
                            onChange={handleChange}
                            name='Zip' value={data.Zip} />
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary"
                            onClick={handleUpdate}
                        >UPDATE</button>
                    </div>
                </form>

            </div>
        </>
    )

}

export default Update