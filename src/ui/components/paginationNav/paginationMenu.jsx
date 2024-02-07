import { TablePagination } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const PaginationMenu =()=>{
    const [users, setUsers] = useState({})

    const user=[
        {
            id:1,
            name:"los",
        },
        {
            id:2,
            name:"losas",
        },
        {
            id:3,
            name:"losa",
        },
        {
            id:4,
            name:"los",
        },
        {
            id:5,
            name:"losas",
        },
        {
            id:6,
            name:"losa",
        },
    ]
    useEffect(() => {
        fetch('https://65c3eec657a483fcb14329f5.mockapi.io/api/v1/users')
          .then((response) => {
            return response.json()
          })
          .then((users) => {
            setUsers(users)
          })
      }, [])

    return(
        <div>
            <TablePagination count={1}/>
            {
                user.map(art=>{
                    return(
                        <div key={art.id}>
                            <li>{art.name}</li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PaginationMenu;