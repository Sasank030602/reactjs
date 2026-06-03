import React, { useState } from "react";
import "./index.css";

function LoginPreview() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showDetails, setShowDetails] = useState(false);

    const handleReset = () => {
        setUsername("");
        setPassword("");
        setShowDetails(false);
    };

    return (
        <div class="Text">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={() => setShowDetails(true)}>
                Show Details
            </button>

            <button onClick={handleReset}>
                Reset
            </button>

            {showDetails && (
                <div>
                    <p>Username: {username}</p>
                    <p>Password: {password}</p>
                </div>
            )}
        </div>
    );
}

export default LoginPreview;