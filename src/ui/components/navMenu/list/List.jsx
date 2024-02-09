import useStyles from "./NavMenu.styles";
import { Pagination } from "../pagination/Pagination";
import { useState } from "react";
export const List = (props) => {
  const { data } = props;
  const { list } = data;
  const classes = useStyles();
  
  const[currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = list.slice(startIndex, endIndex);

  const handlerButtonPrev = () => {
    setCurrentPage(currentPage - 1);
  }
  const handlerButtonNext = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <nav className={classes.wrapper}>
      <ul>
        {currentItems.map((item) => (
          <li key={item._id}>
            <a to="/">{item.username}</a>
          </li>
        ))}
      </ul>
        <Pagination data={list} itemsPerPage={itemsPerPage} handlerButtonPrev={handlerButtonPrev} handlerButtonNext={handlerButtonNext}/>
    </nav>
  );
};
