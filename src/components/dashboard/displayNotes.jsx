import React, { Component } from 'react'
import '../../styles/createNote.css';
import '../../styles/displayNotes.css';
import NoteIcons from './noteIcons';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import OutlinedPin from '../../assets/outlined_pin.svg';
import FilledPin from '../../assets/filled_pin.svg'
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        marginLeft: '85px',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: '600px',
        height: '135px',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(3),
        borderRadius: '10px',
        paddingBottom: '5px'

    },
    noteContainer: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
    },
    summary: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 700,
    },
    pin: {
        width: '25px',
        height: '25px',
        opacity: 0.71,
    }
});

class DisplayNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            moreOption:"",
        }
    }

    render() {
        const { classes, theme } = this.props;
        let allNote = this.props.note;
        const mapNotes = allNote.map((data, index) => {
            console.log(data, "  ", index)
            return (
                <div key={index} className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2} className={classes.noteContainer}>
                            <Grid className={classes.summary}>
                                <Grid className={classes.title} >
                                    {data.title}
                                </Grid>
                                <Grid>
                                    <IconButton aria-label="More">
                                        <Tooltip title="More">
                                            <img
                                                className={classes.pin}
                                                src={OutlinedPin}
                                                alt="Pin"
                                            />
                                        </Tooltip>
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid>
                                {data.description}
                            </Grid>
                            <Grid >
                                    < NoteIcons noteData={data}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            )
        })

        return (
            <div>
                {mapNotes}
            </div>
        );
    }
}

export default ((withStyles(styles, { withTheme: true })(DisplayNotes)))