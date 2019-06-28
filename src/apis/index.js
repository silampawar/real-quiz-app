import axios from "axios";

export const apiFetchAll = () =>{
    return axios.get("https://opentdb.com/api.php?amount=10");
}