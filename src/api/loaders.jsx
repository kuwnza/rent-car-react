import Cookies from "universal-cookie";

const backend = import.meta.env.VITE_APP_BACKEND;

const cookies = new Cookies();

const token = cookies.get("token");

export const userAndRents = async () => {
  const [usersData, carsData] = await Promise.all([
    users().then(res => res.json()),
    cars().then(res => res.json())
  ]);

  return { users: usersData, cars: carsData };

};

export const users = () => {
  return fetch(`${backend}/admin/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        `Bearer ${token}`,
    },
  });
}

export const rents = () => {
  return fetch(`${backend}/admin/rents`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        `Bearer ${token}`,
    },
  });
};

export const rentById = ({ params }) => {
  return fetch(`${backend}/admin/rents/${params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        `Bearer ${token}`,
    },
  });
};

export const userCars = () => {
  return fetch(`${backend}/cars`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        `Bearer ${token}`,
    },
  });
};

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
