import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../api/http";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    nik: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await http.post("/auth/register", formData);

      if (response.status === 200) {
        console.log("Register success");
        navigate("/");
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
        <h1 className="text-2xl font-bold text-center">Register new Customer</h1>
        <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 w-full">
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
          <div className="mb-4 w-full">
            <label
              htmlFor="nik"
              className="block text-sm font-medium text-gray-700">
              NIK
            </label>
            <input
              type="number"
              id="nik"
              name="nik"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.nik}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700">
              Nomor Telepon
            </label>
            <input
              type="number"
              id="phone_number"
              name="phone_number"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="date_of_birth"
              className="block text-sm font-medium text-gray-700">
              Tanggal Lahir
            </label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.date_of_birth}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 w-full">
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
