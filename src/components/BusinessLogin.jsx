import React from "react";
import { useNavigate } from "react-router-dom";

const Businesslogin = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      color: "#551a1a",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(10px)",
      zIndex: 1,
    },
    box: {
      position: "relative",
      zIndex: 2,
      background: "rgba(255, 255, 255, 0.25)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(10px)",
      borderRadius: "15px",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      padding: "40px 30px",
      width: "90%",
      maxWidth: "350px",
      textAlign: "center",
    },
    title: {
      marginBottom: "20px",
      fontSize: "1.8rem",
      fontWeight: "700",
      color: "#551a1a",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "rgba(255,255,255,0.7)",
      outline: "none",
      fontSize: "1rem",
      color: "#551a1a",
    },
    button: {
      backgroundColor: "#551a1a",
      color: "#fff",
      border: "none",
      padding: "12px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      width: "100%",
      fontSize: "1rem",
      marginTop: "5px",
      transition: "all 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#7b2424",
    },
    createAccount: {
      marginTop: "15px",
      backgroundColor: "transparent",
      color: "#551a1a",
      border: "2px solid #551a1a",
      padding: "10px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      width: "100%",
      fontSize: "1rem",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.box}>
        <h2 style={styles.title}>Login</h2>
        <input type="text" placeholder="Username" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button
          style={styles.button}
          onClick={() => alert("Logged In Successfully!")}
        >
          Log In
        </button>
        <button
          style={styles.createAccount}
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Businesslogin;
