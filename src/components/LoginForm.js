// //from a sandbox tutuorial

// import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Avatar from '@material-ui/core/Avatar';
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Grid from "@material-ui/core/Grid";
// import Link from "@material-ui/core/Link";
// import Typography from "@material-ui/core/Typography";


// const useStyles = makeStyles(theme => ({
//     root: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

// export default function LogForm() {
//     const classes = useStyles();

//     return (
//         <Container component="main" maxWidth="xs">
//             <div className={classes.root}>
//                 <Avatar className={classes.avatar}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5" className={classes.header}>
//                     Sign In
//                 </Typography>
//                 <form className={classes.form}>
//                     <TextField
//                         variant="outlined"
//                         margin="normal"
//                         required
//                         fullWidth
//                         id="email"
//                         type="email"
//                         name="email"
//                         label="Email Address"
//                         autoComplete="email"
//                         autoFocus
//                     />
//                     <TextField
//                         variant="outlined"
//                         margin="normal"
//                         required
//                         fullWidth
//                         name="password"
//                         label="Password"
//                         type="password"
//                         id="password"
//                         autoComplete="current-password"
//                     />
//                     <Button className={classes.submit}
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         color="primary"
//                     >
//                         Sign In
//                     </Button>
//                     <Grid container>
//                         <Grid item xs>
//                             <Link href="#" variant="body2">
//                                 Forgot password?
//                             </Link>
//                         </Grid>
//                         <Grid item>
//                             <Link href="#" variant="body2">
//                                 {"Don't have an account? Sign Up"}
//                             </Link>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </div>
//         </Container>
//     );
// }

