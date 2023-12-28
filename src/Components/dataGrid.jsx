import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, MenuItem, Select } from '@mui/material';
import {typeEnum , roleEnum} from '../utils/enums'
import {POST} from '../utils/api'  
import axios from 'axios';

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function MDataGrid({datasource}) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'userName',
      headerName: 'User Name',
      width: 100,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'password',
      headerName: 'Password',
      // type: 'number',
      width: 90,
      editable: true,

    },
  
    {
      field: 'type',
      headerName: 'Type',
      // type: 'number',
      width: 120,
      editable: true,
      renderCell: (params) => (
        <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={type}
            defaultValue={params.row.type}
            fullWidth={true}
            onChange={(e)=>{setType(e.target.value) ;updatedField(e,params.row,'type')}}
            onCellE
            autoWidth
            label="Age"
          >
            {
              typeEnum.map((x)=>{
                return(
    
                  <MenuItem value={x.value}>{x.name}</MenuItem>
                )
              })
            }
          </Select>
      )
    },
    {
      field: 'userType',
      headerName: 'Role',
      // type: 'number',
      width: 120,
      editable: true,
      renderCell: (params) => (
        <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={role}
            defaultValue={params.row.userType}
            fullWidth={true}
            onChange={(e)=>{setRole(e.target.value);updatedField(e,params.row,'userType')}}
            autoWidth
            label="Age"
          >
            {
              roleEnum.map((x)=>{
                return(
    
                  <MenuItem value={x.value}>{x.name}</MenuItem>
                )
              })
            }
          </Select>
      )
    },
    {
      field: 'contactNo',
      headerName: 'Contact No',
      // type: 'number',
      width: 140,
      editable: true,

    },
    {
      field: 'specialist',
      headerName: 'Specialist',
      // type: 'number',
      width: 130,
      editable: true,

    },
    {
      field: 'education',
      headerName: 'Education',
      // type: 'number',
      width: 90,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      // type: 'number',
      width: 150,
      editable: true,
      renderCell: (params) => (
        <>
        <Button onClick={()=>editRecord(params.row)}>
          Edit
        </Button>
        <Button onClick={()=>deleteRecord(params.row)}>
          Delete
        </Button>
        </>
      )
    },
  ];
  const [type , setType] = React.useState()
  const [role , setRole] = React.useState()

  const updatedField=(e,selectedRow,key)=>{
    
    {selectedRow[key]=e.target.value}
  }
  const editRecord=(record)=>{
    axios.post(`http://localhost:4000${POST?.EDITUSERS}/${record._id}`,record)
    .then((res) => {
        console.log(res.data, "=res=")
    }).catch((err) => {
        console.log('Error====>', err)
    })
  }
  const deleteRecord=(record)=>{
    axios.delete(`http://localhost:4000${POST?.DELETEUSERS}/${record._id}`)
    .then((res) => {
        console.log(res.data, "=res=")
    }).catch((err) => {
        console.log('Error====>', err)
    })
  }
  return (
    <Box class="userGrid" sx={{ width: '100%' }}>
      <DataGrid
        sx={{backgroundColor:'white'}}
        rows={datasource}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}