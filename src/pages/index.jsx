import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { isAuthenticated } = useAuth();
    return (
      <div className="mx-20 my-10">
        {isAuthenticated ? (
          <table className="table">
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
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>
                <div className="flex gap-3 justify-center">
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-primary">View</button>
                  <button className="btn btn-error">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        ) : "You are not logged in"}
      </div>
    );
}

export default Home;