import React, { useState, useEffect } from "react";
import Axios from "../../apis/axios";
import { Link } from "react-router-dom";

const Sposts = () => {
  let [state, setState] = useState(null);
  let [loading, setLoading] = useState(false);
  let sdeletepost = async id => {
    await Axios.delete(`/posts/${id}`);
    window.location.assign("");
  };

  useEffect(() => {
    windows.alert("you have been sucessfull registered");
    let fetchPosts = async () => {
      try {
        let { data } = await Axios.get("/posts");
        setLoading(true);
        setState(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
    setLoading(false);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>course</th>
            <th>Password</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {state === null
            ? "loading..."
            : state.map(post => {
                return (
                  <tr key={post.id}>
                    <td>{post.name}</td>
                    <td>{post.details}</td>
                    <td>{post.password}</td>
                    <td>
                      <Link to={`/edit-post/${post.id}`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deletePost(post.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Sposts;
