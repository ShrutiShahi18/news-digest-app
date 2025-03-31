import { useState } from "react";
import { NhostClient } from "@nhost/nhost-js";

const nhost = new NhostClient({ subdomain: "your-nhost-subdomain" });

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignup = async () => {
        const { error } = await nhost.auth.signUp({
            email,
            password,
            options: {
                locale: "en-US"  // Fix the locale issue
            }
        });

        if (error) {
            setError(error.message);
            console.error("Signup Error:", error);
        } else {
            alert("Signup successful! Please verify your email.");
        }
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default App;
