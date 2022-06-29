import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../apis/axios";
// import LoginPost from "./LoginPost";
import "./teacher.css";
const CreatePost = () => {
  let [name, setName] = useState("");
  let [details, setDetails] = useState("");
  let [password, setPassword] = useState("");

  let [loading] = useState(false);
  let navigate = useNavigate();

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { name, details, password };
      await axios.post("/posts", payload);
      navigate("/register");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="createPost">
      <article className="createPost1">
        <h3>Register As a Trainer</h3>
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
                  type="password"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                {/* <Link className="nav-link" to="/register"> */}
                  <button className="btn">
                    {loading === true ? "loading" : "Register"}
                  </button>
                {/* </Link> */}
              </td>
            </tr>
          </table>
        </form>
      </article>
      {/* <main>
        <LoginPost/>
      </main> */}
    </section>
  );
};
export default CreatePost;
