import { useQuery } from 'react-query';
import { getUsers } from '../../../async/services/userServices';
import getEnvVariables from '../../../config/configEnvs';
import { Box } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid'  
const columns = [{
    flex:0.2,
    with:80,
    field:'nro',
    headerName:'Nro'
},
{
    flex:0.2,
    with:80,
    field:'firstName',
    headerName:'firstName'
},
{
    flex:0.2,
    with:80,
    field:'lastName',
    headerName:'LastName'
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
    headerName:'Status'
},
]
const DataTable = () =>{
  const { HOST, SERVICE } = getEnvVariables();
  const endpoint = `${HOST}${SERVICE}/users`;
    const { data, isLoading} = useQuery('getUsers', () =>
    getUsers(endpoint)
  );
    return (
        <Box sx={{height: 400, width: '100%'}}>
            {isLoading ? <Box>Loading...</Box> :
        <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    }
    </Box>
    )
}
export default DataTable