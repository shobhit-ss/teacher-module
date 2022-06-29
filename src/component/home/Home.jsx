import React from 'react'
import "./home.css";

const Home = () => {
  return (
    <section className="home1">
      <h2>Courses Offered</h2>
      <main className="home2">
        <div>
          <div>Mern On Board</div>
          <div>Javascript</div>
          <div>Mongodb</div>
        </div>
        <div>
          <div>Java On Board</div>
          <div>Java</div>
          <div>Ruby</div>
        </div>
        <div>
          <div>Testers On Board</div>
          <div>Selenium</div>
          <div>Automation tools</div>
        </div>
      </main>
    </section>
  );
}

export default Home