import React, { useEffect, useState } from "react";
import axios from "../../apis/axios";
// import { useNavigate } from "react-router-dom";
import "./teacher.css";

const LoginPost = () => {
  let [value, setValue] = useState([]);
  let [state, setState] = useState([]);
  const handleFilter = () => state.filter(val => setValue(val));
  // let navigate = useNavigate();
  let fetchUser = async () => {
    try {
      let { data } = await axios.get("http://localhost:5000/posts");
      setState(data);
    } catch (error) {}
  };
  useEffect(() => {
    try {
      fetchUser();
      handleFilter();
    } catch (error) {
      console.log(error);
    }
  }, []);
  let auth = e => {
    e.preventDefault();
    value.map(x => {
      let { name, details, password } = x;
      for (let i = 0; i < x.length; i++) {
        if (Name === name && Password == password) {
          console.log("success");
        }
      }
    });
  };
  let [Name, setName] = useState();
  let [Password, setPassword] = useState();
  return (
    <form onSubmit={auth}>
      <div>
        <input
          type="text"
          value={Name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={Password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default LoginPost;
