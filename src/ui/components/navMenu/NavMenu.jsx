import useStyles from "./NavMenu.styles";
const NavMenu = () => {
  const classes = useStyles();
  return (
    <nav className={classes.wrapper}>
      <ul>
        <li>
          <a to="/">Inicio</a>
        </li>
        <li>
          <a to="/">Pedidos</a>
        </li>
        <li>
          <a to="/">Clientes</a>
        </li>
        <li>
          <a to="/">Promociones</a>
        </li>
        <li>
          <a to="/">Opiniones</a>
        </li>
        <li>
          <a to="/">Configuracion</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
