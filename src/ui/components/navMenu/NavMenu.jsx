import { useQuery } from "react-query";
import { getUsers } from "../../../async/services/userServices";
import getEnvVariables from "../../../config/configEnvs";
import { List } from "./list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const NavMenu = () => {

  const [dataApi, setDataApi]=useState([]);
  useEffect(()=>{
    getAllData()
  },[])

  const { HOST, SERVICE, API_BACKEND } = getEnvVariables();

  const getAllData = async()=>{
    try {
      const response = await axios.get(`${API_BACKEND}`) 
      setDataApi(response.data)
    } catch (error) {
      alert('error al conseguir datos')
    }    
  }

  
  // const endpoint = `${HOST}${SERVICE}/users`;
  // const { data, isLoading, isError } = useQuery("getUsers", () =>
  //   getUsers(endpoint)
  // );
  return <div> 
      <List data={dataApi} />
    </div>;
};

export default NavMenu;
