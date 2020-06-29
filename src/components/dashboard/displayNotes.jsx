import React, { Component } from 'react'
import '../../styles/createNote.css';
import '../../styles/displayNotes.css';
import NoteIcons from './noteIcons';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        marginLeft:'85px',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: '600px',
        height: '135px',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(3),
    },
    noteContainer: {
        display:'flex',
        flexDirection:"column",
    }
});

class DisplayNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
        }
    }


    render() {
        const { classes, theme } = this.props;
        let allNote = this.props.note;
        const mapNotes = allNote.map((data, index) => {
            return (
                <div key={index} className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2} className={classes.noteContainer}>
                            <Grid>
                                {data.title}
                            </Grid>
                            <Grid>
                                {data.description}
                            </Grid>
                            <Grid>
                                < NoteIcons/>
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