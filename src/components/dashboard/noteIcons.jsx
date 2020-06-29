import React, { Component } from 'react'
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
export default class NoteIcons extends Component {
    render() {
        return (
            <div className="noteIcons">
                <AddAlertOutlinedIcon fontSize="small" />
                <PersonAddOutlinedIcon fontSize="small" />
                <ColorLensOutlinedIcon fontSize="small" />
                <ImageOutlinedIcon fontSize="small" />
                <ArchiveOutlinedIcon fontSize="small" />
                <MoreVertOutlinedIcon fontSize="small" />
                <UndoOutlinedIcon fontSize="small" />
                <RedoOutlinedIcon fontSize="small" />
                {/* <Button size="small"
                    onClick={this.saveNote}>Close</Button> */}
            </div>
        )
    }
}