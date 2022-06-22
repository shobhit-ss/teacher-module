import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Axios from "../../apis/axios";
import "./teacher.css";

const CreatePost = () => {
  let [name, setName] = useState("");
  let [details, setDetails] = useState("");
  let [password, setPassword] = useState("");

  let [loading] = useState(false);
  // let navigate = useNavigate();

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { name, details, password };
      await Axios.post("/posts", payload);
      // navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="createPost">
      <article className="createPost1">
        <h3>Register As a Teacher</h3>
        <form onSubmit={handleSubmit}>
          <table>
              
            <tr>
                <td>
                  <label htmlFor="name">Name</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </td>
            </tr>
              
            <tr>
              
                <td>
                  <label htmlFor="details">Role</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="details"
                    value={details}
                    onChange={e => setDetails(e.target.value)}
                    required
                  />
                </td>
              
            </tr>

            <tr>
             
                <td>
                  <label htmlFor="password">password</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </td>
           
            </tr>

            <tr>
             
                <td>
                  <button className="btn">
                    {loading === true ? "loading" : "Register"}
                  </button>
                </td>
          
            </tr>
          </table>
        </form>
      </article>
    </section>
  );
};

export default CreatePost;
