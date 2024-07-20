import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [Student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => (setStudent(res.data)
   ))

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/dlt/${id}`);
      console.log(res.data);
       window.location.reload();
    } catch (err) {
      console.error('Error deleting the item:', err);
      console.log(id)
    }
  };
  
  
  return (
    <div className=" d-flex mt-5 justify-content-center align-item-center vw-100 vh-100">
      <div className="row w-100">
        <div className="col-lg-12">
          <div className="card w-75 bg-info">
            <div className="card-body ">
              <Link to='/add' className="btn btn-primary mb-3">Add</Link>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name </th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Student.map((data, index) => (
                    <tr key={index}>
                      <td>{data.Name}</td>
                      <td>{data.Email}</td>

                      <td>
                        <Link to={`edit/${data.id}`} className="btn btn-warning m-1">Edit</Link>
                        <button className="btn btn-danger m-1" onClick={(e)=> handleDelete(data.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
