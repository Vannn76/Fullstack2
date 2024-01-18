import React,{useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
const [nama_penyewa, setNamaPenyewa] = useState("");
const [alamat, setAlamat] = useState("");
const [tgl_sewa, setTglSewa] = useState("");
const [durasi, setDurasi] = useState();
const [lokasi_ambil, setLokasiAmbil] = useState("");
const [lokasi_kembali, setLokasiKembali] = useState("");
const [email, setEmail] = useState("");
const [no_telp, setNoTelp] = useState("");
const [totalHarga, setTotalHarga] = useState();
const [mobId, setMobId] = useState();
const [Mobil, setMobil] = useState([]);
const navigate = useNavigate();

const saveUser = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/users", {
          nama_penyewa: nama_penyewa,
          alamat: alamat,
          tgl_sewa: tgl_sewa,
          durasi: durasi,
          lokasi_ambil: lokasi_ambil,
          lokasi_kembali: lokasi_kembali,
          email: email,
          no_telp: no_telp,
          totalHarga: totalHarga,
          mobId: mobId
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
    getMobil();
  }, []);

  const getMobil = async () => {
    const response = await axios.get("http://localhost:5000/mobil");
    setMobil(response.data);
  };

  // Calculate totalHarga when mobId or durasi changes
  useEffect(() => {
    if (mobId && durasi) {
      const selectedMobil = Mobil.find((mobil) => mobil.id === parseInt(mobId, 10));
      const hargaPerHari = selectedMobil ? selectedMobil.harga : 0;
      const calculatedTotalHarga = hargaPerHari * durasi;
      console.log("Selected Mobil:", selectedMobil);
      console.log("Harga Per Hari:", hargaPerHari);
      console.log("Durasi:", durasi);
      console.log("Calculated Total Harga:", calculatedTotalHarga);
      setTotalHarga(calculatedTotalHarga);
    }
  }, [mobId, durasi, Mobil]);

  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-md-6">
        <h1 className='title'>Silahkan Masukkan Pesanan Anda</h1>
        <form onSubmit={saveUser}>
          <div className="mb-3">
            <label className="label">Nama Lengkap</label>
            <div className="control">
              <input
                type="text"
                className="form-control"
                name='nama'
                value={nama_penyewa}
                onChange={(e) => setNamaPenyewa(e.target.value)}
                placeholder="Nama Lengkap"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type='text'
                className="form-control"
                name='alamat'
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="JL. xxx"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="label">Tanggal Sewa</label>
            <div className="control">
              <input
                type="date"
                className="form-control"
                name='tanggal-sewa'
                value={tgl_sewa}
                onChange={(e) => setTglSewa(e.target.value)}
                placeholder="dd-mm-yyyy"
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="control">
              <div className="select is-fullwidth">
                <label className="form-label">List Mobil</label>
                  <select className="form-control"
                    name='mobil'
                    value={mobId}
                    onChange={(e) => setMobId(e.target.value)}
                    >
                    <option>--Silahkan Pilih Mobil--</option>
                    {Mobil.map((mobil) => (
                      <React.Fragment key={mobil.id}>
                      <option value={mobil.id}>{mobil.nama} Harga : Rp.{mobil.harga}</option>
                      </React.Fragment>
                      ))}
                  </select>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="label">Durasi</label>
            <div className="control">
              <input
                type="number"
                className="form-control w-25"
                name='durasi'
                value={durasi}
                onChange={(e) => setDurasi(e.target.value)}
                placeholder="1 hari"
                min={1}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="label">Lokasi Pengambilan</label>
            <div className="control">
              <input
                type="text"
                className="form-control"
                name='lokasi-pengambilan'
                value={lokasi_ambil}
                onChange={(e) => setLokasiAmbil(e.target.value)}
                placeholder="Tempat Ambil"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="label">Lokasi Pengembalian</label>
            <div className="control">
              <input
                type="text"
                className="form-control"
                name='lokasi-pengembalian'
                value={lokasi_kembali}
                onChange={(e) => setLokasiKembali(e.target.value)}
                placeholder="Tempat Kembali"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="form-control"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="label">No Telfon</label>
            <div className="control">
              <input
                type="text"
                className="form-control"
                name='no-telp'
                value={no_telp}
                onChange={(e) => setNoTelp(e.target.value)}
                placeholder="08xxxxxxx"
              />
            </div>
          </div>

        <div className="mb-3">
          <label className="label">Total Harga</label>
            <div className="control">
              <input
                type="text"
                className="form-control"
                name="totalHarga"
                value={totalHarga}
                readOnly
              />
        </div>
      </div>

          <div className="mb-3">
            <div className="row">
              <div className="col-sm-4"></div>
                <div className="col-sm-4">
                  <button type="submit" onClick={notif} className="btn btn-success w-100">
                    Bayar
                  </button>
                <div className="col-sm-4"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-6"></div>
    </div>
  </div>
  );
};


export default AddUser;