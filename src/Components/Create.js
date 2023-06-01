import React, { useState } from 'react'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Create = () => {

    const [data, setData] = useState({})
    // console.log(data)

    const navigate = useNavigate();

   

    const handleChange = (e) => {
        const { name, value } = e.target

        setData((prev) => ({
            ...prev,
            [name]: value

        }))
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const { Name, Lastname, Email, City, State, Zip } = data;

        const res = await fetch('http://localhost:8000/register' , {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
        },
        body:JSON.stringify({
            Name, Lastname, Email, City, State, Zip
        })
       
    })


    const resData = await res.json();
    console.log(resData)

    if(res.status === 422){
        alert(resData.message)

    }else{
        alert(resData.message)
        
    }if( Name && Lastname && Email && City && State && Zip){
        navigate('/')
    }
    

    }


    return (
        <>
            <h1>CREATE YOUR FORM (Create Opreration)</h1>
            <Link to={'/'} >
                <button style={{ margin: 15 }} type="button" class="btn btn-primary btn-lg">HOME</button>

            </Link>

            <div class="border border-primary" style={{ padding: 50 }} >

                <form class="row g-3" onSubmit={handleSubmit} >
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input type="text" class="form-control" id="inputEmail4"
                            name='Name' value={data.Name} onChange={handleChange} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Lastname</label>
                        <input type="text" class="form-control" id="inputEmail4"
                            name='Lastname' value={data.Lastname} onChange={handleChange} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"
                            name='Email' value={data.Email} onChange={handleChange} />
                    </div>


                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity"
                            name='City' value={data.City} onChange={handleChange} />
                    </div>

                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">State</label>
                        <input type="text" class="form-control" id="inputCity"
                            name='State' value={data.State} onChange={handleChange} />
                    </div>


                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip"
                            name='Zip' value={data.Zip} onChange={handleChange} />
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary"
                        >SUBMIT</button>
                    </div>
                </form>

            </div>
        </>
    )

}
export default Create