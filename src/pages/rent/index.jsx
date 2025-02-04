import { Link, useLoaderData, useNavigate } from "react-router-dom";
import http from "../../api/http";

function Rents() {
  const rents = useLoaderData().data;
  const navigate = useNavigate();

  const deleteAction = id => {
    http.delete(`/admin/rents/${id}`).then(() => {
      navigate(".")
    });
  }
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">List Rent</h1>
        <Link to="/rents/create" className="btn btn-primary">Create Car</Link>
      </div>
      <div className="overflow-x-auto mx-10">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Customer Name</th>
              <th>Car Status</th>
              <th>Car Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rents.map((rent, index) => (
              <tr key={index}>
                <td>{rent.id}</td>
                <td>{rent.user.name}</td>
                <td>{rent.car.status}</td>
                <td>{rent.car.type_car}</td>
                <td>
                  <div className="flex gap-3 justify-center">
                    <Link to={`/rents/${rent.id}`} className="btn btn-warning">
                      Edit
                    </Link>
                    <button onClick={() => deleteAction(rent.id)} className={`btn btn-error ${rent.status == 'rent' ? 'btn-disabled' : ''}`}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Rents;