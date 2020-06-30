import React, { Component } from 'react';
import DisplayNotes from './displayNotes';
import FundooService from '../../services/noteService'
let service = new FundooService();

export default class GetAllNotes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allNotes: [],
            title: "",
            description: "",
        };
        this.displayAllNotes = this.displayAllNotes.bind(this);
    }

    displayAllNotes = () => {
       service
       .getNoteList()
       .then((data)=>{
           console.log(data.data.data.data);
           this.setState({allNotes:data.data.data.data});
           console.log("get all list array", this.state.allNotes)
           console.log("id",this.state.allNotes)
       })
       .catch((err)=>{
           console.log(err)
       })
      
    };

    componentDidMount() {
        this.displayAllNotes();
    }

    render() {
        return (
            <div>
                <DisplayNotes note={this.state.allNotes}/>
            </div>
        )
    }
}