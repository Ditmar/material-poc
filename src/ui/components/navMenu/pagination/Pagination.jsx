import useStyles from "./Pagination.styles";
export const Pagination = props => {
    const { data, itemsPerPage, handlerButtonPrev, handlerButtonNext} = props;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const classes = useStyles();

    const paginationNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationNumbers.push(i);
    }
    
    return (
        <div className={classes.pagination}>
            <button onClick={handlerButtonPrev}>prev</button>
            {paginationNumbers.map((pageNumber) => (
                <a key={pageNumber}>{pageNumber}</a>
            ))}
            <button onClick={handlerButtonNext}>next</button>
        </div>
    )
    

}

