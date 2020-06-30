import axios from "axios";
const apiUrl = "http://fundoonotes.incubation.bridgelabz.com/api/notes";

export default class NoteService {
    createNotes(data) {
        let token = localStorage.getItem('token')
        console.log("get axios post data")
        return axios.post(apiUrl + "/addNotes", data, {
            headers: {
                "Authorization": token,
            }
        });
    }

    getNoteList() {
        let token = localStorage.getItem('token')
        console.log("get note data")
        return axios.get(apiUrl + "/getNotesList", {
            headers: {
                "Authorization": token,
            }
        });
    }

    deleteNote(data) {
        let token = localStorage.getItem('token')
        console.log("note trash")
        console.log("token in service",token)
        return axios.post(apiUrl + "/trashNotes", data,{
            headers: {
                "Authorization": token,    
            }
        })
    }
}
