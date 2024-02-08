import useStyles from "./NavMenu.styles";
export const List = (props) => {
  //const { data } = props;
  //const { list } = data;
  const { list } = props;
  const classes = useStyles();
  return (
    <nav className={classes.wrapper}>
      <ul>
        {list.map((item) => (
          <li key={item._id}>
            <a to="/">{item.username}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

