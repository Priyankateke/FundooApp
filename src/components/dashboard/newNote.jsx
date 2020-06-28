import React, { Component } from 'react'
import '../../styles/createNote.css'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
export default class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state= {
            open:false
        }
    }
    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
      };
    render() {
        return (
            <div className="defaultContainer"
            onClick={this.handleToggle}>
                <div className="font">
                    Take a note...
                  </div>
                <div className="icons">
                    <CheckBoxOutlinedIcon />
                </div>
                <div className="icons">
                    <BrushIcon />
                </div>
                <div className="icons">
                    <ImageOutlinedIcon />
                </div>
            </div>
        )
    }
}

