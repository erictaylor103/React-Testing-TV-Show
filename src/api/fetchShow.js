import axios from "axios";

const fetchShow = () => {
    return axios
        .get(
            "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
             return res
        })
        .catch(error =>{
            console.log("Cannot fetch API, Error: ", error);
            return error
        })
};

export default fetchShow;