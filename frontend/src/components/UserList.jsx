import React, {useState, useEffect} from 'react';
import axios from "axios";

const UserList = () => {
    const [user, setUser] = useState([]);

useEffect(()=> {
  getUsers();
}, []);

const getUsers = async () => {
const response = await axios.get("http://localhost:5000/users");
  setUser(response.data);
};


  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-11">
          <h1 className=' title is-4 has-text-centered'>Daftar Pelanggan</h1>
            <table className='table is-striped is-fullwidth'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Tanggal Lahir</th>
                  <th>Tanggal Booking</th>
                  <th>Tanggal Berangkat</th>
                  <th>Destinasi</th>
                  <th>Jumlah Penumpang</th>
                  <th>Email</th>
                  <th>No Telfon</th>
                  <th>Layanan</th>
                </tr>
              </thead>
              <tbody>
              {user.map((user, index)=> (
                 <tr key ={user.id}>
                 <td>{index + 1 }</td>
                 <td>{user.nama}</td>
                 <td>{user.tgl_lahir}</td>
                 <td>{user.tgl_booking}</td>
                 <td>{user.tgl_berangkat}</td>
                 <td>
                  {user.destinasi.tujuan} <br />
                  <span>Harga : {user.destinasi.harga}</span>
                </td>
                 <td>{user.jml_penumpang} Orang</td>
                 <td>{user.email}</td>
                 <td>{user.no_telp}</td>
                 <td>{user.layanan}</td>
               </tr>   
                ))}
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList
