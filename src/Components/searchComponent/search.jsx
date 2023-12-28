import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { GET, AUTH } from '../../utils/api'
import axios from 'axios';
import {get_All_Appointment} from '../../store/actions/index'
import { useDispatch } from 'react-redux';
export default function SearchBar({searchOptions,searchBy}){
    const dispatch = useDispatch()
    const [searchVal,setSearchValue] = useState({})
    const [allPatient,setAllPatient]=useState([])
    const onSearch = () =>{   
        axios.get(`http://localhost:4000${GET?.GETALLAPPOINTMENTS}/${searchVal?.searchValue}`)
        .then((res) => {
            if(res.data && res.data.AllUser && res.data.AllUser.length > 0){
            setAllPatient(res.data.AllUser)
            dispatch(get_All_Appointment(res.data.AllUser))
            }
            console.log(res.data.AllUser, "=res=")
        }).catch((err) => {
    })

    }
    return(
        <>
        <div className="searchbar-mDiv d-flex justify-content-end">
            <div className='d-flex searchDiv'>
                <input placeholder="Search"  onChange={(e)=>setSearchValue({...searchVal,searchValue:e.target.value})} className='searchInput'/>
                <select className='selectColour' onChange={(e)=>setSearchValue({...searchVal,searchBy:e.target.value})}>
                    <label htmlFor="">Test</label>
                    {
                        searchOptions.map((x)=>{
                            return(
                                <option  value={x.value}>{x.name}</option>
                            )
                        })
                    }
                </select>
                {/* <button > */}
                    <SearchIcon onClick={()=>onSearch()} className='searchIcon' />
                {/* </button> */}
            </div>
        </div>
        </>
    )   
}