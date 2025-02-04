import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import http from "../../api/http";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await http.post("/auth/login", formData);

      if (response.status === 200) {
        const { token } = response.data;
        const cookies = new Cookies();
        cookies.set("token", token, { path: "/" });
        http.get("/user/info").then(res => {
          login(res.data.data);
        });
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-1/2 mx-auto flex justify-center items-center my-10">
      <div>
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;