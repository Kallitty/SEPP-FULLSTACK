import React from "react";

export default function Signup() {
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form action="#" onSubmit={onSubmit}>
                    <h1 className="title">Login to your account.</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered?{" "}
                        <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
