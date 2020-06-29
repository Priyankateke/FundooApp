import React, {Component} from 'react';
import DisplayNotes from './displayNotes';
import FundooService from '../../services/noteService'
let service = new FundooService();

export default class GetAllNotes extends Component {
  
    

    render() {
        return(
            <DisplayNotes />
        )
    }
}