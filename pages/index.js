import React, { useState, useEffect } from 'react'
import axios from 'axios'

const home = () => {

    const [data1, setData] = useState([]) 
    const [postData1, setPostData] = useState([])
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    let ids = 6
    const state = {
        config: {},
        data: {
            data: {
                id: ids++,
                name: id,
                year: 2006,
                color: "#111",
                pantone_value: "14-4811", 
            }
        },
        headers: {},
        request: {},
        status: 200,
        statusText: '',
    }

    

   
    // const dummy = {
    //     ...state,
    //     data: {
    //         ...state,
    //         data: {
    //             ...state,
    //             id: ids++,
    //             name: id,
    //             year: 2006,
    //             color: "#111",
    //             pantone_value: "14-4811", 
    //         }
    //     }
    // }
    const dummy= {
        
        "name": id,
        "job": password,
    }

    const getData = async() => {
        // const res = await axios.get('https://reqres.in/api/users')
        const res = await axios.get('https://reqres.in/api/users')
        const data = Object.assign({}, res) 
        setData(data.data.data)
        // console.log(data)
    }

    const postData = async() => {
        const res = await axios.post('https://reqres.in/api/users', dummy)
        const data = await res.data
        setPostData([...postData1, data])
        console.log(res)
        console.log(postData1)
    }

    const handleChange = e => {
        const { target: { value, name } } = e
        if(name === "id") setId(value)
        if(name === "password") setPassword(value)
        
    }

    const handleSubmit = e => {
        e.preventDefault()
        postData()
        setId('')
        setPassword('')
        
    }

    useEffect(() => {
        getData()
        // console.log(data1)
    }, [])

    return (
        <div>
            id: {id}<br />
            password: {password}
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="id" value={id} onChange={handleChange} required />
                    <input type="text" name="password" value={password} onChange={handleChange} required />
                    <button type="submit">submit</button>
                </form>
            </div>
            {postData1.map(item => {
                return (
                    <>
                    <div>num: {item.id}</div>
                    <div>name: {item.name}</div>
                    <div>job: {item.job}</div>
                    <div>createdAt: {item.createdAt}</div><br />
                    </>
                )
            })}
            {/* <div>{postData1.id}</div> */}
            {/* <div>{postData1.name}</div> */}
            <br />
            <ul style={{listStyle:"none", padding: "0",}}>
                {data1.map(item => {
                    return (
                        <li key={item.id} style={{padding: "10px", border: "1px solid #ddd", marginTop: "10px"}}>
                            num: {item.id} <br />
                            first_name: {item.first_name} <br />
                            last_name: {item.last_name} <br />
                            <img src={item.avatar}/> <br />
                            email: {item.email} <br />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default home;