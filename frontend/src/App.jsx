import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  // Login
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");

  // Register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [regUser, setRegUser] = useState("");
  const [regPass, setRegPass] = useState("");

  // Dashboard
  const [incident, setIncident] = useState("");
  const [report, setReport] = useState(null);
  const [logs, setLogs] = useState([]);

  const login = () => {
    if (loginUser && loginPass) {
      setPage("dashboard");
    } else {
      alert("Enter username and password");
    }
  };

  const register = () => {
    if (name && email && regUser && regPass) {
      alert("Registration Successful");
      setPage("login");
    } else {
      alert("Please fill all fields");
    }
  };

  const analyze = async () => {
    if (!incident) {
      alert("Please enter an incident.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ incident }),
      });

      const data = await res.json();

      const newReport = {
        id: "INC-" + Math.floor(Math.random() * 10000),
        threat: data.threat,
        severity: data.severity,
        score: data.score,
        recommendation: data.recommendation,
      };

      setReport(newReport);

      setLogs([
        {
          time: new Date().toLocaleTimeString(),
          incident,
          severity: data.severity,
        },
        ...logs,
      ]);
    } catch (err) {
      alert("Backend server is not running.");
    }
  };  if (page === "login") {
    return (
      <div className="loginPage">
        <div className="box">
          <h1>🛡 CyberShield AI</h1>
          <h2>Login Access</h2>

          <input
            type="text"
            placeholder="Username"
            value={loginUser}
            onChange={(e) => setLoginUser(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={loginPass}
            onChange={(e) => setLoginPass(e.target.value)}
          />

          <button onClick={login}>Login</button>

          <p>
            Don't have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setPage("register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    );
  }

  if (page === "register") {
    return (
      <div className="loginPage">
        <div className="box">
          <h1>Create Account</h1>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Username"
            value={regUser}
            onChange={(e) => setRegUser(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={regPass}
            onChange={(e) => setRegPass(e.target.value)}
          />

          <button onClick={register}>Register</button>

          <p>
            Already have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setPage("login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    );
  }  return (
    <div className="container">

      <header className="header">
        <h1>🛡 CyberShield AI Dashboard</h1>

        <button
          className="logout"
          onClick={() => setPage("login")}
        >
          Logout
        </button>
      </header>

      <div className="cards">

        <div className="card">
          <h3>Threat Level</h3>
          <h2 style={{ color: "red" }}>
            {report ? report.severity : "Waiting"}
          </h2>
        </div>

        <div className="card">
          <h3>Security Assessment</h3>
          <h2>{report ? report.score : "--"}</h2>
        </div>

        <div className="card">
          <h3>AI Status</h3>
          <h2 style={{ color: "#00ff99" }}>Online</h2>
        </div>

        <div className="card">
          <h3>Incidents</h3>
          <h2>{logs.length}</h2>
        </div>

      </div>

      <h2>📝 Log Entry System</h2>

      <textarea
        placeholder="Describe the security incident..."
        value={incident}
        onChange={(e) => setIncident(e.target.value)}
      />

      <br />

      <button
        className="analyzeBtn"
        onClick={analyze}
      >
        🔍 Analyze Incident
      </button>

      {report && report.severity === "High" && (
        <div className="critical">
          🚨 CRITICAL SECURITY ALERT 🚨
        </div>
      )}

      {report && (
        <div className="report">

          <h2>📄 Incident Report</h2>

          <p><b>Incident ID:</b> {report.id}</p>
          <p><b>Threat Detection:</b> {report.threat}</p>
          <p><b>Severity:</b> {report.severity}</p>
          <p><b>Security Assessment:</b> {report.score}</p>

          <h3>🤖 AI Recommendation</h3>

          <p>{report.recommendation}</p>

        </div>
      )}

      <h2>📋 Incident History</h2>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Incident</th>
            <th>Severity</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.time}</td>
              <td>{log.incident}</td>
              <td>{log.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;