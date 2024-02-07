import { useQuery } from "react-query";
import { getUsers } from "../../../async/services/userServices";
import getEnvVariables from "../../../config/configEnvs";
import { List } from "./list/List";
import { mockedData } from "../../../__mock__/mockUsers"
const NavMenu = () => {
  const { HOST, SERVICE } = getEnvVariables();
  const endpoint = `${HOST}${SERVICE}/users`;
  const { data, isLoading, isError } = useQuery("getUsers", () =>
    getUsers(endpoint)
  );
  console.log(data);
  return <div>{isLoading ? <div>Loading...</div> : <List data={mockedData} />}</div>;
};

export default NavMenu;
