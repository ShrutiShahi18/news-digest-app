import { useEffect, useState } from "react";
import { NhostClient } from "@nhost/nhost-js";

const nhost = new NhostClient({ subdomain: "ktkucbnyhybpruopvqyu" });

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        nhost.auth.onAuthStateChanged((event, session) => {
            setUser(session?.user || null);
        });
    }, []);

    return (
        <div>
            {user ? <h1>Welcome, {user.email}</h1> : <button onClick={() => nhost.auth.signIn({ email: 'test@example.com', password: 'password' })}>Login</button>}
        </div>
    );
}

export default App;
