import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Deletelog = ({ match }) => {
    const [data, setMeal] = useState({})
    const history = useHistory();

    useEffect(() => {
        fetch(`/nutrition/${match.params.id}`)
            .then(res => res.json())
            .then(data => setMeal(data))
    }, []);

    const handleDelete = () => {
        fetch("/nutrition/" + data._id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/log')
        })
    }

    return (
        <div>

{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleDelete}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> */}
             <div className='my-auto'>
              <div className="text-3xl capitalize pt-1">
              <strong>{data.name}</strong> <br />
  
              <strong>⚡</strong> {data.calories} 
              </div>
              
              <div className="text-md pt-1">
              <strong>C</strong> {data.carbohydrates}
              <strong>P</strong> {data.protein}
              <strong>F</strong> {data.fats}
              <strong>(g)</strong> {data.weight}
              </div>
              <button className=" bg-black text-white uppercase tracking-wider px-3 py-1 mt-2 text-xs shadow-md" onClick={handleDelete}> delete </button>
            </div>

        </div>
    )
}

export default Deletelog
