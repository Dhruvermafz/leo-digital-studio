import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AdminLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Your API login endpoint
    const BASE_API_URL = "https://your-api-url"; // Replace with your actual API URL
    const loginEndpoint = `${BASE_API_URL}/login`;

    try {
      // Make API call for login
      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials"); // Customize error message as needed
      }

      // Clear error on successful login
      setError("");

      // Perform actions after successful login (e.g., redirect, update state)
      // ...
    } catch (error) {
      setError(error.message);
    } finally {
      // Hide loading indicator
      setLoading(false);
    }
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Login</strong>
        </h1>

        <h1 className="project-heading">
          This Portal is only for Admin and Team Members
        </h1>

        <Row className="justify-content-md-center">
          <Col lg={8}>
            <div className="logo-up">
              <figure className="logo">
                <span>ItsABlog Admin Panel</span>
              </figure>
            </div>
            <div className="box">
              <Form onSubmit={handleLogin} className="form form--login">
                <span>
                  <svg
                    id="login"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-users"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <h1 className="form__title">Sign in</h1>
                <Form.Group controlId="user" className="form__helper">
                  <Form.Control
                    type="text"
                    placeholder="User"
                    className="form__input"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                  />
                  <Form.Label className="form__label">User</Form.Label>
                </Form.Group>
                <Form.Group controlId="password" className="form__helper">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="form__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Form.Label className="form__label">Password</Form.Label>
                </Form.Group>
                <Button
                  type="submit"
                  className="form__button"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
                {error && <p className="text-danger">{error}</p>}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AdminLogin;
