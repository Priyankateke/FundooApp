import React, { Component } from 'react'
import '../../styles/createNote.css'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import FiberPinOutlinedIcon from '@material-ui/icons/FiberPinOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Container from "@material-ui/core/Container";

export default class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: true,
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
    render() {
        return (
             <Container>
                <ClickAwayListener onClickAway={this.onHandleClickaway}>
                 <div>
                    {
                        this.state.collapse ?
                            <div className="defaultContainer"
                                onClick={this.handleClick}>
                                <div className="font">Take a note...</div>
                                <div className="icons"><CheckBoxOutlinedIcon /></div>
                                <div className="icons"><BrushIcon /></div>
                                <div className="icons"><ImageOutlinedIcon /></div>
                            </div> :
                            <div className="expandedContainer"
                                onClick={this.handleClick}>
                                <div className="summary">
                                    <div className="title">Title</div>
                                    <div><FiberPinOutlinedIcon /></div>
                                </div>
                                <div className="title">Take a note..</div>
                                <div className="noteIcons">
                                    <AddAlertOutlinedIcon fontSize="small" />
                                    <PersonAddOutlinedIcon fontSize="small" />
                                    <ColorLensOutlinedIcon fontSize="small" />
                                    <ImageOutlinedIcon fontSize="small" />
                                    <ArchiveOutlinedIcon fontSize="small" />
                                    <MoreVertOutlinedIcon fontSize="small" />
                                    <UndoOutlinedIcon fontSize="small" />
                                    <RedoOutlinedIcon fontSize="small" />
                                </div>
                            </div>
                    }
             </div>
            </ClickAwayListener>
       </Container >
        );
    }
}

