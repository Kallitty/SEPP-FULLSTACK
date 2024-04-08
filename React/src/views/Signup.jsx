import React from "react";

export default function Signup() {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form action="#" onSubmit={onSubmit}>
                    <h1 className="title">Signup for free.</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                        Already have an account?{" "}
                        <Link to="/login">Login to continue.</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
