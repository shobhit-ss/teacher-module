import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../apis/axios";

const Seditpost = () => {
  let [id] = useParams();
  let [name, setName] = useState(""); 
  let [course, setCourse] = useState("");
  let [password, setPassword] = useState("");

  let [loading] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    let fetchPost = async () => {
      let { data } = await axios.get(`/posts/${id}`);
      setName(data.name);
      setDetails(data.details);
      setPassword(data.password);
    };
    fetchPost();
  }, [id]);

  let handleSubmit = async e => {
    e.preventDefault();
    let payload = { name, course, password };
    try {
      await axios.put(`/posts/${id}`, payload);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
 }


  return (
    <section>
      <article>
        <h2>Update Post</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' value={name} onChange={e=> setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="course">Course</label>
            <input type="text" id='password' value={course} onChange={e=> setCourse(e.target.value) } required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' value={password} onChange={e=> setPassword(e.target.value) } />
          </div>
          <button>
            {loading === true ? "Loading" : "createPost"}
          </button>
        </form>
      </article>
    </section>
  )
}

export default Seditpost