"use client"

import axios from "axios";
import { useRouter } from "next/navigation";

const AuthPage = ({ onAuth }) => {
    const router = useRouter()
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post("/api/authenticate", { username: value })
        .then((res) => onAuth({ ...res.data, secret: value  }))

        localStorage.setItem('username', value)
    };
    return (
        <div className="background ">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>

                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AuthPage;