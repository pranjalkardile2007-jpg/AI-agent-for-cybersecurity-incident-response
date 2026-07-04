const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({
    status: "Server is running successfully!"
  });
});

// Chat API
app.post("/api/chat", (req, res) => {
  const { incident } = req.body;

  let response = {
    threat: "Normal Activity",
    severity: "Low",
    score: "35%",
    recommendation: "Continue monitoring the system."
  };

  if (incident) {
    const text = incident.toLowerCase();

    if (text.includes("ransomware") || text.includes("malware")) {
      response = {
        threat: "Critical Cyber Attack",
        severity: "High",
        score: "96%",
        recommendation:
          "Disconnect the infected system, isolate the network, and perform a full malware scan."
      };
    } else if (text.includes("phishing")) {
      response = {
        threat: "Phishing Attempt",
        severity: "Medium",
        score: "74%",
        recommendation:
          "Block the sender, warn users, and change compromised passwords."
      };
    } else if (text.includes("ddos")) {
      response = {
        threat: "DDoS Attack",
        severity: "High",
        score: "92%",
        recommendation:
          "Enable DDoS protection, block malicious IPs, and monitor traffic."
      };
    }
  }

  res.json(response);
});

// Incident History API
app.get("/api/history", (req, res) => {
  res.json([
    {
      id: 1,
      incident: "Ransomware Attack",
      severity: "High"
    },
    {
      id: 2,
      incident: "Phishing Email",
      severity: "Medium"
    }
  ]);
});

// Users API
app.get("/api/users", (req, res) => {
  res.json({
    username: "admin",
    role: "Security Analyst"
  });
});

// Feedback API
app.post("/api/feedback", (req, res) => {
  res.json({
    message: "Feedback received successfully."
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});