import React, { useState } from "react";
import indianImg from './assets/pictures/indian.jpg';
import italianImg from './assets/pictures/italian.jpg';
import sushiImg from './assets/pictures/sushi.jpg';
import burgerImg from './assets/pictures/burger.jpg';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [filters, setFilters] = useState({
    rating: false,
    price: false,
    cuisine: false,
    more: false,
  });

  const toggleFilter = (filter) => {
    setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const navigate = useNavigate();

  const restaurants = [
    {
      id: 1,
      name: "The Spice Garden",
      rating: "⭐ 4.5",
      cuisine: "Indian",
      location: "Newcastle Under-lyme, UK",
      image: indianImg,
    },
    {
      id: 2,
      name: "La Bella Vita",
      rating: "⭐ 4.7",
      cuisine: "Italian",
      location: "Fenton, UK",
      image: italianImg,
    },
    {
      id: 3,
      name: "Sakura Sushi",
      rating: "⭐ 4.3",
      cuisine: "Japanese",
      location: "Longton, UK",
      image: sushiImg,
    },
    {
      id: 4,
      name: "Burger Hub",
      rating: "⭐ 4.2",
      cuisine: "Fast Food",
      location: "Stafford, UK",
      image: burgerImg,
    },
  ];

  const styles = {
    container: {
      fontFamily: "Poppins, sans-serif",
      backgroundColor: "#fff",
      color: "#551a1a",
      minHeight: "100vh",
      overflowX: "hidden",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#551a1a",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 10,
      flexWrap: "wrap",
      gap: "10px",
    },
    logo: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      cursor: "pointer",
    },
    searchBar: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      flex: "1",
      maxWidth: "280px",
    },
    searchInput: {
      padding: "8px 12px",
      border: "none",
      outline: "none",
      flex: "1",
      color: "#551a1a",
      fontSize: "0.9rem",
    },
    searchButton: {
      padding: "8px 14px",
      backgroundColor: "#551a1a",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
    },
    buttonGroup: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    reviewButton: {
      padding: "8px 14px",
      borderRadius: "6px",
      border: "2px solid #fff",
      backgroundColor: "#fff",
      color: "#551a1a",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    },
    authButton: {
      padding: "8px 14px",
      borderRadius: "6px",
      border: "2px solid #fff",
      backgroundColor: "transparent",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    },
    hero: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "450px",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "relative",
      padding: "0 20px",
    },
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(6px)",
      zIndex: 1,
    },
    heroText: {
      fontSize: "2rem",
      fontWeight: "bold",
      zIndex: 2,
      maxWidth: "90%",
    },
    heroSearch: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: "20px",
      zIndex: 2,
      backgroundColor: "#fff",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      maxWidth: "90%",
    },
    heroInput: {
      padding: "10px 14px",
      border: "none",
      outline: "none",
      flex: "1",
      minWidth: "200px",
      fontSize: "1rem",
      color: "#551a1a",
    },
    heroButton: {
      padding: "10px 18px",
      backgroundColor: "#551a1a",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
    },
    filterContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "15px",
      marginTop: "30px",
      padding: "0 20px",
    },
    filterButton: {
      padding: "10px 20px",
      borderRadius: "20px",
      border: "2px solid #551a1a",
      backgroundColor: "#fff",
      color: "#551a1a",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "0.3s",
    },
    restaurantSection: {
      padding: "50px 20px",
      backgroundColor: "#fff",
      textAlign: "center",
    },
    sectionTitle: {
      fontSize: "1.8rem",
      color: "#800000",
      fontWeight: "700",
      marginBottom: "30px",
    },
    restaurantGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
      justifyContent: "center",
    },
    card: {
      backgroundColor: "#f9f9f9",
      borderRadius: "15px",
      boxShadow: "0 4px 10px rgba(128, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      overflow: "hidden",
      cursor: "pointer",
    },
    imageContainer: {
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    info: {
      padding: "15px",
      textAlign: "left",
    },
    name: {
      fontSize: "1.2rem",
      fontWeight: "700",
      color: "#800000",
      marginBottom: "5px",
    },
    rating: {
      color: "#ffcc00",
      fontWeight: "600",
    },
    cuisine: {
      color: "#555",
      fontSize: "0.95rem",
    },
    location: {
      color: "#777",
      fontSize: "0.9rem",
    },
    // ✨ Updated Footer Section ✨
    footer: {
      marginTop: "50px",
      padding: "40px 20px",
      backgroundColor: "#fff",
      borderTop: "2px solid #800000",
      color: "#551a1a",
      textAlign: "center",
    },
    footerTitle: {
      fontWeight: "bold",
      fontSize: "1.2rem",
      color: "#800000",
    },
    footerText: {
      fontSize: "0.9rem",
      color: "#551a1a",
      marginTop: "8px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
          <div style={styles.logo}>🍽️ RestoReview</div>
          <div style={styles.searchBar}>
            <input type="text" placeholder="Search restaurants..." style={styles.searchInput} />
            <button style={styles.searchButton}>Go</button>
          </div>
        </div>

        <div style={styles.buttonGroup}>
          <button style={styles.reviewButton}>✍️ Write a Review</button>
          <button style={styles.authButton} onClick={() => navigate("/login")}>
            Log In
          </button>
          <button style={{ ...styles.authButton, backgroundColor: "#fff", color: "#551a1a" }}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <h1 style={styles.heroText}>Discover Your Next Favorite Meal</h1>
        <div style={styles.heroSearch}>
          <input
            type="text"
            placeholder="Search by restaurant, dish, or location..."
            style={styles.heroInput}
          />
          <button style={styles.heroButton}>Search</button>
        </div>
      </div>

      {/* Filter Bars */}
      <div style={styles.filterContainer}>
        {["rating", "price", "cuisine", "more"].map((filter) => (
          <div key={filter}>
            <button style={styles.filterButton} onClick={() => toggleFilter(filter)}>
              {filter === "cuisine" ? "Cuisine: All" : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          </div>
        ))}
      </div>

      {/* Popular Restaurants */}
      <section style={styles.restaurantSection}>
        <h2 style={styles.sectionTitle}>Popular Restaurants Near You</h2>
        <div style={styles.restaurantGrid}>
          {restaurants.map((res) => (
            <div key={res.id} className="card" style={styles.card}>
              <div style={styles.imageContainer}>
                <img src={res.image} alt={res.name} style={styles.image} />
              </div>
              <div style={styles.info}>
                <div style={styles.name}>{res.name}</div>
                <div style={styles.rating}>{res.rating}</div>
                <div style={styles.cuisine}>{res.cuisine}</div>
                <div style={styles.location}>{res.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✨ Footer Section ✨ */}
      <footer style={styles.footer}>
  <div style={styles.footerTitle}>🍴 RestoReview</div>
  <div style={styles.footerText}>
    © 2025 RestoReview — Eat. Share. Discover.
  </div>

  <div style={styles.footerTitle}>For Business</div>

  <div
    style={{ ...styles.footerText, cursor: "pointer", textDecoration: "underline" }}
    onClick={() => navigate("/Businesslogin")}
  >
    Add a Restaurant
  </div>

  <div
    style={{ ...styles.footerText, cursor: "pointer", textDecoration: "underline" }}
    onClick={() => navigate("/Businesslogin")}
  >
    Business Login
  </div>
</footer>

    </div>
  );
};

export default HomePage;
