import axios from "axios"
import MDataGrid from "../Components/dataGrid"
import { useEffect, useState } from "react"
import {GET} from '../utils/api'
import { useSelector } from "react-redux"
import { Routes, Route, Link, Navigate } from 'react-router-dom';

export  const UserList=()=>{
    const loginData=useSelector((state)=>state?.myReducer?.loginData)
    const [userList,setAllUserList]=useState([])
    // console.log('RRRRRRRR',registerData)
    useEffect(()=>{
        getAllUsers()
    },[])
    useEffect(()=>{
        console.log('registrationData',userList)
    },[loginData])
    const getAllUsers=()=>{
        axios.get(`http://localhost:4000${GET?.GETALLUSERS}`)
        .then((res) => {
            console.log(res.data,'ressssssssssssssss')
            if(res.data && res.data.AllUser && res.data.AllUser.length > 0){
                res.data.AllUser.forEach((x,i)=>{
                    x['id']=i
                })
                setAllUserList(res.data.AllUser)
            }
            console.log(res.data.AllUser, "=res=")
        }).catch((err) => {
            console.log('Error====>', err)
        })
    }
    if(loginData?.userType != 'admin') return <Navigate to="/" replace></Navigate>
    return(
        <div className="main-userList" >
            <h3 style={{color:'white'}}>User List</h3>
            <MDataGrid datasource={userList}/>
        </div>
    )
}