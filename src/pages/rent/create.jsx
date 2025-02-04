import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import http from "../../api/http";

function CreateRent() {
  const [rent, setRent] = useState({
    tenant_id: "",
    car_id: "",
    date_borrow: "",
    date_return: "",
    down_payment: "",
    discount: "",
  });
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRent((prevRent) => ({
      ...prevRent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    http.post("/admin/rents", rent).then(() => {
      setLoading(false);
      navigate("/rents");
    }).catch(e => setError(e));
  }

  const { users, cars } = useLoaderData();

  const availableCars = cars.data.filter(car => car.status === "available");

  return (
    <div className="w-1/4 mx-auto py-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold ">Create Rent</h1>
        <div className="w-full">
          <label htmlFor="">Pelanggan:</label>
          <select
            name="tenant_id"
            className="select select-bordered w-full"
            value={rent.tenant_id}
            onChange={handleChange}
            id="">
            <option>Pilih Pelanggan</option>
            {users.data.map((user, index) => (
              <option key={index} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="">Mobil:</label>
          <select
            name="car_id"
            className="select select-bordered w-full"
            value={rent.car_id}
            onChange={handleChange}
            id="">
            <option>Pilih Mobil</option>
            {availableCars.map((car, index) => (
              <option key={index} value={car.id}>
                {car.name_car}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="">Tanggal Peminjaman:</label>
          <input
            type="date"
            name="date_borrow"
            id=""
            className="input input-bordered w-full"
            value={rent.date_borrow}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="">Tanggal Pengembalian:</label>
          <input
            type="date"
            name="date_return"
            id=""
            className="input input-bordered w-full"
            value={rent.date_return}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="">Pembayaran Awal:</label>
          <input
            type="number"
            name="down_payment"
            value={rent.down_payment}
            onChange={handleChange}
            id=""
            className="input input-bordered w-full"
          />
        </div>
        <div className="w-full">
          <label htmlFor="">Diskon:</label>
          <input
            type="number"
            name="discount"
            value={rent.discount}
            onChange={handleChange}
            id=""
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {loading ? <span className="loading loading-spinner loading-sm"></span> : "Create Rent"}
        </button>
      </form>
    </div>
  );
}

export default CreateRent;
