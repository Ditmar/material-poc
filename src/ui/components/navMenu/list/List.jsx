import * as React from 'react';
import {Paper} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


import useStyles from "./NavMenu.styles";

const columns = [
  { id: 'id', label: 'id', minWidth: 400 },
  { id: 'title', label: 'título', minWidth: 100 },
];



export const List = (props) => {
  const { data } = props;
  const { list } = data;
  const classes = useStyles();
  

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

console.log(data)
  return (
    <Paper className={classes.container}>
      <TableContainer sx={{ maxHeight: 440 }}  >
        <Table stickyHeader aria-label="sticky table"  >
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell 
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );

  // return (
  //   <nav className={classes.wrapper}>
  //     <ul>
  //       {data.map((item) => (
  //         <li key={item.id}>
  //           <a to="/">{item.title}</a>

  //         </li>
  //       ))}
  //     </ul>
  //   </nav>
  // );
};
