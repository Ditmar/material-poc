import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    main: {
        color:theme.palette.secondary.dark
    },
    status:{
        color:theme.palette.secondary.contrastText
    }
}))