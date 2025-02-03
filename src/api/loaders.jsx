import Cookies from "universal-cookie";

const backend = import.meta.env.VITE_APP_BACKEND;

const cookies = new Cookies();

const token = cookies.get("token");

export const cars = () => {
  return fetch(`${backend}/admin/cars`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        `Bearer ${token}`,
    },
  });
};

export const carById = ({ params }) => {
  return fetch(`${backend}/admin/cars/${params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        `Bearer ${token}`,
    },
  });
};
