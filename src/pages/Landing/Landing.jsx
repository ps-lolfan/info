import React from 'react'
import {
    Grid ,
    makeStyles
} from '@material-ui/core'

const Image = '/images/bg.png'

const styles = makeStyles ({
    main: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'        
    }
})

const Landing = () => {
    const classes = styles();
    return (
        <Grid conatiner className={classes.main}>
            <Grid item>
                <h1>hello</h1>
            </Grid>
        </Grid>
    )
}

export default Landing
