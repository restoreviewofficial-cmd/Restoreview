import React, { useState } from "react";

const Bussignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    else if (!passwordRegex.test(formData.password))
      newErrors.password =
        "Password must contain uppercase, lowercase and special character";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please re-enter your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);
      alert("Signup successful!");
    }
  };

  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    overflow: "hidden",
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(8px)", // 🔹 This applies the blur effect
    transform: "scale(1.1)", // avoids seeing edges when blurred
    zIndex: 0,
  };

  const formStyle = {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "40px",
    width: "100%",
    maxWidth: "400px",
    color: "#fff",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
    zIndex: 1,
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
    transition: "0.3s",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#ff6b6b",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  };

  const buttonHover = {
    background: "#e55b5b",
  };

  return (
    <div style={containerStyle}>
      {/* 🔹 Blurred Background Layer */}
      <div style={backgroundStyle}></div>

      {/* 🔹 Glassmorphism Signup Form */}
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Signup</h2>

        <div>
          <label>Full Name:</label>
          <input
            style={inputStyle}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onFocus={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.3)")
            }
            onBlur={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.2)")
            }
          />
          {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            style={inputStyle}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.3)")
            }
            onBlur={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.2)")
            }
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            style={inputStyle}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onFocus={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.3)")
            }
            onBlur={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.2)")
            }
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <div>
          <label>Re-enter Password:</label>
          <input
            style={inputStyle}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onFocus={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.3)")
            }
            onBlur={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.2)")
            }
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) =>
            (e.target.style.background = buttonHover.background)
          }
          onMouseLeave={(e) => (e.target.style.background = "#ff6b6b")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Bussignup;
