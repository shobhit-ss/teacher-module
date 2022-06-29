import React from "react";
import "./home.css";

const Footer = () => {
  return (
    <section className="footer1">
      <main className="footer2">
        <table className="footerTable">
          <tr>
            <td>
              <a href="">Home</a>{" "}
            </td>
            <td>
              <a href="">AboutUs</a>{" "}
            </td>
            <td>
              <a href="">Explore</a>{" "}
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Trainer</a>{" "}
            </td>
            <td>
              <a href="">Student</a>{" "}
            </td>
            <td>
              <a href="">Companies</a>{" "}
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Courses</a>{" "}
            </td>
            <td>
              <a href="">Devlopers</a>{" "}
            </td>
            <td>
              <a href="">Testers</a>{" "}
            </td>
          </tr>

          <tr>
            <td>
              <a href="">instagram</a>{" "}
            </td>
            <td>
              <a href="">facebook</a>{" "}
            </td>
            <td>
              <a href="">google</a>{" "}
            </td>
          </tr>
          <tr>
            <td>
              Submit Mail: &nbsp; &nbsp;
              <input type="email" />
            </td>
            {/* <td colSpan={2}>
              <label htmlFor="">Feedback</label>
            </td> */}
          </tr>
        </table>
      </main>
    </section>
  );
};

export default Footer;
