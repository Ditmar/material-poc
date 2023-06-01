import { useQuery } from "react-query";
import { getUsers } from "../../../async/services/userServices";
import getEnvVariables from "../../../config/configEnvs";
import { List } from "./list/List";
const NavMenu = () => {
  const { HOST, SERVICE } = getEnvVariables();
  const endpoint = `${HOST}${SERVICE}/users`;
  const { data, isLoading, isError } = useQuery("getUsers", () =>
    getUsers(endpoint)
  );
  return <div>{isLoading ? <div>Loading...</div> : <List data={data} />}</div>;
};

export default NavMenu;
