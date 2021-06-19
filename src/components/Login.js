import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const Image = '/images/model-s.jpg'

const useStyles = makeStyles((theme) => ({
    paper: {
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    },
    main: {
        height: "100vh",
        width: "100vh",
        backgroundColor: fade("#090909", 0.5),
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    mainPaper: {
        height: "auto",
        width: 500,
        padding: '20px',

    },
    btn: {


    }
}));

function Login() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container className={classes.main}>

                <Grid item>
                    <Paper className={classes.mainPaper}>
                        <Grid container alignItems="center" justify="space-between">
                            <Grid item>
                                <img src={'/images/logo.svg'} alt ="some logo"/>
                            </Grid>
                            <Grid item>
                            <Typography variant="body1">
                                   Login
                            </Typography>
                            </Grid>
                        </Grid>

                        <Grid container alignItems="center" justify="space-between">
                            <Grid item xs={12}>
                                <br />
                                <hr />
                                <br />
                            </Grid>
                            <Grid container alignItems="center" justify="space-between">
                                <Grid item xs={12}  >
                                    <Typography variant="body1" style={{
                                        color : "#26bbe0"
                                    }}>
                                    Username or Email Id
                                    </Typography>
                                    <br />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth className={classes.margin} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            // value={values.amount}
                                            // onChange={handleChange('amount')}
                                            endAdornment={<InputAdornment position="start"><PermIdentityIcon /></InputAdornment>}
                                            style={{

                                                height:"40px"
                                            }}
                                        />
                                        <br />

                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                <Typography variant="body1" style={{
                                        color : "#26bbe0"
                                    }}>
                                    Password
                                    </Typography>
                                    <br />

                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth className={classes.margin} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            // value={values.amount}
                                            // onChange={handleChange('amount')}
                                            endAdornment={<InputAdornment position="start"><VisibilityOutlinedIcon /></InputAdornment>}
                                            
                                            style={{

                                                height:"40px"
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid container alignItems="center" justify="space-between">
                                <Grid item xs={1}>
                                    <Checkbox
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography variant="body1">
                                        I accept the Legal (Terms of Use) and Privacy Policy
                                    </Typography>
                                </Grid>
                            </Grid>

                            <br />
                            <br />
                            <br />

                            <Grid container alignItems="center" justify="space-between" className={classes.bottom}>
                                <Grid item>
                                    <Typography variant="body1" style={{
                                        color : "#26bbe0"
                                    }}>
                                        Forgot Password?
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" style={{
                                        borderRadius: 35,
                                        backgroundColor: "#26bbe0",
                                        fontSize: "18px",
                                        width: "150px",
                                        fontColor: '#000'
                                    }}>
                                        Log In
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>


                    </Paper>


                </Grid>


            </Grid>

        </Paper>

    )
}

export default Login
