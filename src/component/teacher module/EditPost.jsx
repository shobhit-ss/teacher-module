import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "../../apis/axios"

const EditPost = () => {
    let { id } = useParams();
    let [name, setName] = useState("");
    let [details, setDetails] = useState("");
    let [password, setPassword] = useState("");
     
    let [loading] = useState(false);
    
    let navigate = useNavigate();

    useEffect(() => {
        let fetchPost = async () => {
            let { data } = await Axios.get(`/posts/${id}`);
            setName(data.name);
            setDetails(data.details);
            setPassword(data.password);
        
        };
        fetchPost();
    }, [id]);

    let handleSubmit = async e => {
        e.preventDefault();
        let payload = { name, details, password };
        try {
            await Axios.put(`/posts/${id}`, payload);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
            <article>
                <h2>Update Post</h2>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} onChange={e=> setName(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="details">Details</label>
                        <input type="text" id="details" value={details} onChange={e => setDetails(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" value={password} onChange= {e=> setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button>
                            {loading === true ? "Loading" : "create POST"}
                        </button>
                    </div>
                </form>
            </article>
        </section>
    )
   
    
}

export default EditPost;

