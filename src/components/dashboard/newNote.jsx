import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../../styles/createNote.css'
import NoteIcons from './noteIcons';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import FiberPinOutlinedIcon from '@material-ui/icons/FiberPinOutlined';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Container from "@material-ui/core/Container";
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import FundooService from '../../services/noteService'
let service = new FundooService();
const styles = theme => ({
    input: {
        outlined: 'none',
    },
})

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: true,
            title: "",
            description: ""
        }
    }
    onHandleClickaway = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    };
    handleClick = () => {
        this.setState({
            collapse: false,
        });
    };

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
        console.log("title", event.target.value)
    }
    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value,
        })
        console.log("description", event.target.value)
    }
    saveNote = () => {
        const user = {
            title: this.state.title,
            description: this.state.description
        };
        console.log("user note", user)

        service
            .createNotes(user)
            .then((Response) => {
                console.log("responce data==>", Response);
                if (Response.statusText === 'OK') {
                    alert("note")
                }
            })
            .catch((err) => {
                console.log(err)
                alert("Token is not valid");
            });
    };
    render() {
        const { classes } = this.props;

        return (
            <Container>
                <ClickAwayListener onClickAway={this.onHandleClickaway}>
                    <div>
                        {
                            this.state.collapse ?
                                <div className="defaultContainer"
                                    onClick={this.handleClick}
                                >
                                    <div className="font">Take a note...</div>
                                    <div className="icons"><CheckBoxOutlinedIcon /></div>
                                    <div className="icons"><BrushIcon /></div>
                                    <div className="icons"><ImageOutlinedIcon /></div>
                                </div> :
                                <div className="expandedContainer"
                                    onClick={this.handleClick}>
                                    <div className="summary">
                                        <div>
                                            <InputBase className={classes.input}
                                                placeholder="Title"
                                                name="title"
                                                inputProps={{ 'aria-label': 'description' }}
                                                value={this.state.value}
                                                onChange={this.handleChangeTitle}
                                            />
                                        </div>
                                        <div><FiberPinOutlinedIcon /></div>
                                    </div>
                                    <div>
                                        <InputBase className={classes.input}
                                            placeholder="Take a note.."
                                            name="description"
                                            inputProps={{ 'aria-label': 'description' }}
                                            value={this.state.value}
                                            onChange={this.handleChangeDescription} />
                                    </div>
                                    <div className="noteIcons">

                                       <div><NoteIcons /></div> 
                                        <div className="close-button">
                                            <Button size="small"
                                                onClick={this.saveNote}>Close</Button>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </ClickAwayListener>
            </Container >
        );
    }
}

NewNote.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default ((withStyles(styles, { withTheme: true })(NewNote))) 