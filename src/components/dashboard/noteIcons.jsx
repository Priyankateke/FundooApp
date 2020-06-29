import React, { Component } from 'react'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import '../../styles/noteIcons.css'
export default class NoteIcons extends Component {
    render() {
        return (
            <div className="iconsConatainer">
                <IconButton aria-label="Remind me" edge="start">
                    <Tooltip title="Reminde me">
                        <AddAlertOutlinedIcon fontSize="small" />
                    </Tooltip>
                </IconButton>

                <IconButton aria-label="Collaborator">
                    <Tooltip title="Collaborator">
                        <PersonAddOutlinedIcon fontSize="small" />
                    </Tooltip>
                </IconButton>

                <IconButton aria-label="Change color">
                    <Tooltip title="Change color">
                        <ColorLensOutlinedIcon fontSize="small" />
                    </Tooltip>
                </IconButton>

                <IconButton aria-label="Add image">
                    <Tooltip title="Add image">
                        <ImageOutlinedIcon fontSize="small" />
                    </Tooltip>
                </IconButton>

                <IconButton aria-label="Archive note">
                    <Tooltip title="Archive">
                        <ArchiveOutlinedIcon fontSize="small" />
                    </Tooltip>
                </IconButton>

                <IconButton aria-label="More">
                    <Tooltip title="More">
                        <MoreVertOutlinedIcon fontSize="small" />
                    </Tooltip>
                </IconButton>
            </div>
        )
    }
}