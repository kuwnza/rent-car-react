import { Link, useLoaderData, useNavigate } from "react-router-dom";
import http from "../../api/http";

function Users() {
  const users = useLoaderData().data;
  const navigate = useNavigate();

  const deleteAction = id => {
    http.delete(`${import.meta.env.VITE_APP_BACKEND}/admin/users/${id}`).then(() => {
      navigate(".")
    })
  }
    return (
      <div className="mx-20 my-10">
        <h1 className="text-2xl font-bold">List User</h1>
        <table className="table">
          <thead>
            <tr>    
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Nomor Telepon</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                <td>
                  <div className="flex gap-2">
                  <Link className="btn btn-warning" href={`/users/${user.id}`}>Edit</Link>
                  <button onClick={() => deleteAction(user.id)} className="btn btn-error">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Users;