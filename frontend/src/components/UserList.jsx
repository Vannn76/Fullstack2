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
    <div className="columns mt-3 is-centered">
        <div className="column is-11">
          <h1 className='d-flex align-items-center justify-content-center mb-3'>Daftar Pelanggan</h1>
            <table className='table is-striped is-fullwidth'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Tanggal Sewa</th>
                  <th>Durasi</th>
                  <th>Mobil</th>
                  <th>Tempat Ambil</th>
                  <th>Tempat Kembali</th>
                  <th>Email</th>
                  <th>No Telfon</th>
                  <th>Total Harga</th>
                </tr>
              </thead>
              <tbody>
              {user.map((user, index)=> (
                 <tr key ={user.id}>
                 <td>{index + 1 }</td>
                 <td>{user.nama_penyewa}</td>
                 <td>{user.alamat}</td>
                 <td>{user.tgl_sewa}</td>
                 <td>{user.durasi}Hari</td>
                 <td>
                  {user.mobil.nama} <br />
                  <span>Harga : {user.mobil.harga}</span>
                </td>
                 <td>{user.lokasi_ambil}</td>
                 <td>{user.lokasi_kembali}</td>
                 <td>{user.email}</td>
                 <td>{user.no_telp}</td>
                 <td>{user.totalHarga}</td>
               </tr>   
                ))}
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList
