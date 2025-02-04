import { useLoaderData } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { isAuthenticated, user } = useAuth();
  const cars = useLoaderData().data;
    return (
      <div className="mx-20 my-10">
        <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
        {isAuthenticated ? cars.length < 1 ? "You don't have any rents active" : (<table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Car Name</th>
              <th>Car Status</th>
              <th>Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.status}</td>
                <td>{car.owner}</td>
                <td>
                  <a href={`/cars/${car.id}`}>Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>) : "You are not logged in"}
      </div>
    );
}

export default Home;