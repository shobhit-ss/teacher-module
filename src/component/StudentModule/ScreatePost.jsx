import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "../../apis/axios";
import "../teacher module/teacher.css";
import "./student.css";

const ScreatePost = () => {
  let [name, setName] = useState("");
  let [course, setCourse] = useState("");
  let [password, setPassword] = useState("");


  let [loading] = useState(false);
  let navigate = useNavigate();


  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { name, course , password };
      await axios.post("/studentposts", payload);
      navigate("/register");

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className='ScreatePost'>
      <article className='ScreatePost1'>
        <h3>Register as Student</h3>
        <form action="">
          <table>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                <input type="text" id='name' value={name} onChange={e => setName(e.target.value)}
                required
                />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="course">Course</label>
              </td>
              <td>
                <input type="text" id='course' value={course}
                  onChange={e => setCourse(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password</label>
              </td>
              <td>
                <input type="password" id='password' value={password} onChange={e => setPassword(e.target.value)}
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
    </section>
  )
}

export default ScreatePost