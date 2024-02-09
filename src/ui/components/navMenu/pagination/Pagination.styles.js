import { makeStyles } from "@material-ui/core";
import mq from "../../../../config/mq";
const useStyles = makeStyles((theme) => ({
  pagination: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: theme.palette.primary.main,
    fontFamily: "Inter-Regular",
    [mq("xxs")]: {
      width: "100%",
    },
    [mq("md")]: {
      width: "230px",
    },
    border: "1px solid #000",
  },
}));
export default useStyles;