import Axios from "axios";

export default Axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "content-type": "application/json",
    },
});