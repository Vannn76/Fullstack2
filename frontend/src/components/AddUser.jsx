import React,{useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
const [nama, setNama] = useState("");
const [tgl_lahir, setTglLahir] = useState("");
const [tgl_booking, setTglBooking] = useState("");
const [tgl_berangkat, setTglBerangkat] = useState("");
const [jml_penumpang, setJmlPenumpang] = useState("");
const [email, setEmail] = useState("");
const [no_telp, setNoTelp] = useState("");
const [layanan, setLayanan] = useState("");
const [desId, setDesId] = useState();
const [Destinasi, setDestinasi] = useState([]);
const navigate = useNavigate();

const saveUser = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/users", {
          nama: nama,
          tgl_lahir: tgl_lahir,
          tgl_booking: tgl_booking,
          tgl_berangkat: tgl_berangkat,
          jml_penumpang: jml_penumpang,
          email: email,
          no_telp: no_telp,
          layanan: layanan,
          desId: desId
      });
      navigate("/UserList");
    } catch (error) {
      console.log(error);
    }
  };

  const notif = () => {
    alert("Selamat Pesanan Anda Berhasil Di Buat!");
  }

  useEffect(() => {
    getDestinasi();
  }, []);

  const getDestinasi = async () => {
    const response = await axios.get("http://localhost:5000/destinasi");
    setDestinasi(response.data);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1 className='title'>Silahkan Masukkan Data Diri Anda</h1>
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nama Lengkap</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name='nama'
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama Lengkap"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tanggal Lahir</label>
            <div className="control">
              <input
                type="date"
                className="input"
                name='tanggal-lahir'
                value={tgl_lahir}
                onChange={(e) => setTglLahir(e.target.value)}
                placeholder="dd-mm-yyyy"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tanggal Booking</label>
            <div className="control">
              <input
                type="date"
                className="input"
                name='tanggal-booking'
                value={tgl_booking}
                onChange={(e) => setTglBooking(e.target.value)}
                placeholder="dd-mm-yyyy"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Destinasi</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  name='destinasi'
                  value={desId}
                  onChange={(e) => setDesId(e.target.value)}
                  >
                  <option value="">--Silahkan Pilih Destinasi--</option>
                  {Destinasi.map((destinasi) => (
                    <React.Fragment key={destinasi.id}> 
                    <option value={destinasi.id}>{destinasi.tujuan} dengan Harga : {destinasi.harga}</option>
                    </React.Fragment>
                ))}
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Tanggal Berangkat</label>
            <div className="control">
              <input
                type="date"
                className="input"
                name='tanggal-berangkat'
                value={tgl_berangkat}
                onChange={(e) => setTglBerangkat(e.target.value)}
                placeholder="dd-mm-yyyy"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jumlah Penumpang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name='jumlah-penumpang'
                value={jml_penumpang}
                onChange={(e) => setJmlPenumpang(e.target.value)}
                placeholder="Jumlah Penumpang"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">No Telfon</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name='no-telp'
                value={no_telp}
                onChange={(e) => setNoTelp(e.target.value)}
                placeholder="08xxxxxxx"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Layanan</label>
            <div className="control">
              <div className="select is-fullwidth">
              <select
                name='layanan'
                value={layanan}
                onChange={(e) => setLayanan(e.target.value)}
              >
                <option value="">--Pilih Layanan--</option>
                <option value="First Class">First Class</option>
                <option value="Bisnis">Bisnis</option>
                <option value="Ekonomi">Ekonomi</option>
              </select>
              </div>
            </div>
          </div>

          <div className="field">
            <button onClick={notif} type="submit" className="button is-success is-fullwidth">
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default AddUser;