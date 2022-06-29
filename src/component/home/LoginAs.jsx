import React from 'react'
import { Link } from 'react-router-dom';

const LoginAs = () => {
  return (
    <section className="LoginAs1">
      <main className="LoginAs2">
        <Link className="nav-link" to="/logintrainer">
          <button>Register As Trainer</button>
        </Link>
        <Link className='nav-link' to="/loginstudent">
          <button>Register As Student</button>
        </Link>

        <button>Register As Admin</button>
      </main>
    </section>
  );
}

export default LoginAs;