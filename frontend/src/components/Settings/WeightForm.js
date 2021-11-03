import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const WeightForm = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("/nutrition/weight/all")
            .then(res => res.json())
            .then(user => setUser(user))
    }, []);
    
    const [allWeight, setAllWeight] = useState([])

    useEffect(() => {
        if (user) {
    
        const interval = setInterval(() => {
        setAllWeight(user.map(item => item.weight))
        }, 1000)

        return () => clearInterval(interval)
        }
    }, [user])

    let updatedData = allWeight.slice(-1)
    let updatedWeight = updatedData[0]


    const [values, setValues] = useState({
        weight: '',
        date: '',
    })

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    

    const handleSubmit = e => {
        e.preventDefault();
    
        fetch("/nutrition/weight", {
            method: "POST",
            headers: {'Content-type': "application/json"},
            body: JSON.stringify(values)
          })
            .then(res => res.json())
            .then(data => console.log(data))
            // history.go(-1) > to go back where they from
            // history.push('/')
    }

    return (
<div>
       
        <div className="bg-white bg-opacity-40 shadow-lg rounded-xl px-8 pt-7 pb-8 mb-4 text-left">
        <h1 className="text-left text-2xl leading-tight font-bold pb-4">Update your weight.</h1>
                <form onSubmit={handleSubmit}>
                    
                <div className="mb-4">
                 <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-2">Weight</label>
               
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="weight" value={values.weight} onChange={handleChange} />
         </div>
        <div className="mt-4">
          <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-2">date</label>
        </div>
        <div>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" name="date" value={values.date} onChange={handleChange} />
        </div>
<button type="submit" onSubmit={handleSubmit} className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline">Log New Weight</button>
                </form>
                <div className="border-t-2 border-indigo-600 pt-4 mt-4 grid grid-cols-2">
                    <div className="text-left my-auto uppercase text-sm leading-4">Current Weight:</div> <div className="text-right text-2xl my-auto">{updatedWeight}kg</div>
                    </div>
        </div></div>
    )
}

export default WeightForm
