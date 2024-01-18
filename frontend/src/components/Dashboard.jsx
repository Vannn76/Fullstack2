import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Dashboard = () => {
  const [mobil, setMobil] = useState([]);

useEffect(()=> {
  getMobil();
}, []);

const getMobil = async () => {
const response = await axios.get("http://localhost:5000/mobil");
  setMobil(response.data);
};

  return (
    
      <div className="container">
        <h1>RENTAL MOBIL</h1>
        <div class="card card-solid">
          <div class="card-body pb-0">
            <div class="row">
            {mobil.map((mobil, index)=> (
            <React.Fragment key={mobil.id}>
              <div class="col-sm-4 mb-5"key ={mobil.id}>
                <div class="card bg-light d-flex flex-fill">

                  <div class="card-header border-bottom-0">
                    <h2 class="lead"><b>{mobil.nama}</b></h2>
                    <p class="text-muted text-sm"></p>
                  </div>

                  <div class="card-body pt-0">
                    <div class="row">
                      <div class="col-12 text-center">
                        <img style={{width: 350, height: 250}} src={mobil.foto} alt='gambar' />
                      </div>
                    </div>
                  </div>

                  <div class="card-footer">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="text-start">
                          <p>Rp.{mobil.harga}/hari</p>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="text-end">
                          <Link to="add" class="btn btn-sm btn-success">
                            Sewa
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard