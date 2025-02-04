import { useState } from "react";
import http from "../../api/http"
import { useNavigate } from "react-router-dom";

function CreateCar() {
  const [car, setCar] = useState({
    no_car: "",
    name_car: "",
    type_car: "",
    year: "",
    seat: "",
    image: "",
    price: "",
    status: "available",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setLoading(true);
    http.post("/admin/cars", car).then(() => {
      setLoading(false);
      navigate("/cars");
    }).catch(e => setError(e));
  };

  return (
    <div className="w-1/4 mx-auto p-4 my-5">
      <form
        onSubmit={handleSubmit}
        className="form-control gap-3 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold ">Create Car</h1>
        <div className="w-full">
          <label htmlFor="">Nomor Kendaraan:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="no_car"
            placeholder="B 1234 ABC"
            value={car.no_car}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="">Nama Kendaraan:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="name_car"
            placeholder="Tesla XXXX"
            value={car.name_car}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="">Jenis Kendaraan:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="type_car"
            placeholder="SUV, Sedan, Hatchback"
            value={car.type_car}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="">Tahun Produksi:</label>
          <input
            type="number"
            className="input input-bordered w-full"
            name="year"
            placeholder="20XX"
            value={car.year}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="">Jumlah Tempat Duduk:</label>
          <select
            name="seat"
            className="select select-bordered w-full"
            value={car.seat}
            onChange={handleChange}
            id="">
            <option value="">Pilih Tempat Duduk</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="">Url Gambar Kendaraan:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="image"
            placeholder="masukan url gambar"
            value={car.image}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="">Harga Kendaraan:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="price"
            placeholder="1000000"
            value={car.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {loading ? <span className="loading loading-spinner loading-sm"></span> : "Create Car"}
        </button>
      </form>
    </div>
  );
}

export default CreateCar;
