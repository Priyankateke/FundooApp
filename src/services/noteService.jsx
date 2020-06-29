import axios from "axios";
const apiUrl = "http://fundoonotes.incubation.bridgelabz.com/api/notes";

class NoteService{
    createNotes(data) {
        let token=localStorage.getItem('token')
        console.log("get axios post data")
        return axios.post(apiUrl + "/addNotes", data,{
            headers: {
                "Authorization": token,
            }
        });
    }

    getNoteList() {
        
    }
}

export default NoteService