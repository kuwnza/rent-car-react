import { Link, useLoaderData } from "react-router-dom";

function Cars() {
  const cars = useLoaderData().data;

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">List Cars</h1>
        <Link to="/cars/create" className="btn btn-primary">Create Car</Link>
      </div>
      <div className="overflow-x-auto mx-10">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Car Name</th>
              <th>Car Status</th>
              <th>Car Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index}>
                <td>{car.id}</td>
                <td>{car.name_car}</td>
                <td>{car.status}</td>
                <td>{car.type_car}</td>
                <td>
                  <div className="flex gap-3 justify-center">
                    <Link to={`/cars/${car.id}`} className="btn btn-warning">
                      Edit
                    </Link>
                    <button className="btn btn-error">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cars;
