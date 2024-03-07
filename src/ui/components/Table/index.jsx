import { useQuery } from 'react-query';
import { getUsers } from '../../../async/services/userServices';
import getEnvVariables from '../../../config/configEnvs';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import { Typography } from '@mui/material';
import { useStyles } from './palette';

const RenderCellNro = ({ row }) => {
  const classes = useStyles();

  return (
      <Typography noWrap variant='body2' className={classes.main}>
          {row.id}
      </Typography>
  );
};
const RenderCellStatus =({row})=>{
  const classes = useStyles()
  
  return (
    <Typography noWrap variant='body2' className={classes.status}>
        {row.status}
    </Typography>
);
};
const columns = [{
    flex:0.2,
    with:80,
    field:'id',
    headerName:'Nro',
    renderCell: RenderCellNro
},
{
    flex:0.2,
    with:80,
    field:'firstName',
    headerName:'firstName',
    renderCell: ({row})=>{
      return(<Typography noWrap variant='body2' color={'#898C81'}>
        {row.firstName}
      </Typography>)
    }
},
{
    flex:0.2,
    with:80,
    field:'lastName',
    headerName:'LastName',
    renderCell: ({row})=>{
      return(<Typography noWrap variant='body2' color={'#898C81'}>
        {row.lastName}
      </Typography>)
    }
},
{
    flex:0.2,
    with:80,
    field:'email',
    headerName:'Email'
},
{
    flex:0.2,
    with:80,
    field:'status',
    headerName:'Status',
    renderCell: RenderCellStatus
},
]
const DataTable = () =>{
  const { HOST, SERVICE } = getEnvVariables();
  
  const endpoint = `${HOST}${SERVICE}/users`;

    const { data, isLoading} = useQuery('getUsers', () =>
    getUsers(endpoint)
  );
  if(isLoading){
    return(<Box>Loading...</Box> )
  }
  const rowsData = data.map((rows,index)=>({...rows, id:index+1}))
    return (
        <Box sx={{height: 400, width: '100%'}}>
        <DataGrid
        rows={rowsData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,15]}
        disableRowSelectionOnClick
      />
    </Box>
    )
}
export default DataTable