// import React from 'react';
// import {Link} from "react-router-dom"

// const Dashboard = () => {

//   return (
//     <div className='container'>
//       <h1 className='title is-4 mt-3'>Selamat Datang di Website Travelku.id</h1>
//       <h2 className='title is-6'>Booking Travel Anda dan Kunjungi Destinasi Impian Anda!</h2>
//       <h1 className="title is-5 mt-6 has-text-centered">Silahkan Klik Tombol Dibawah Ini Untuk Mendaftar</h1>
//       <div className='has-text-centered is-half'>
//       <Link to="add" className="button is-primary">
//         Registrasi
//       </Link>
//       </div>
//     </div>
//   )
// }

// export default Dashboard

import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import '../app.css';
import bali from '../images/bali.jpg'
import bandung from '../images/bandung.jpg'
import jogja from '../images/jogja.jpg'
import semarang from '../images/semarang.jpg'
import surabaya from '../images/surabaya.jpg'
import bromo from '../images/bromo.jpg'

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };

  return (
  <div className='bgImage'>
    <div className="content">
      <div className="container">
        <h1 className="animate__animated animate__fadeInDown animate__delay-1s" style={{fontSize: 50, color: "white", marginBottom: 50}}>Selamat Datang Di Website <span style={{color: "skyblue"}}>Travelku.id</span></h1>
        <h2 className="animate__animated animate__fadeInDown animate__delay-2s" style={{fontSize: 25, color: "white", marginBottom: 80}}>Berikut ini adalah objek wisata kami :</h2>
          <Slider {...settings} className="animate__animated animate__fadeInRight animate__delay-3s">
              <div>
                <img src={bali} alt="bali" style={{height: 250, borderRadius:10}} />
              </div>
              <div>
              <img src={bandung} alt="bandung" style={{height: 250, borderRadius:10}} />
              </div>
              <div>
              <img src={jogja} alt="jogja" style={{height: 250, borderRadius:10}} />
              </div>
              <div>
              <img src={semarang} alt="semarang" style={{height: 250, borderRadius:10}} />
              </div>
              <div>
              <img src={surabaya} alt="surabaya" style={{height: 250, borderRadius:10}} />
              </div>
              <div>
              <img src={bromo} alt="bromo" style={{height: 250, borderRadius:10}} />
              </div>
            </Slider>
        </div>
        <h2 className="animate__animated animate__fadeInUp animate__delay-4s" style={{fontSize: 25, color: "white", marginTop: 100, marginBottom: 30}}>Mari berlibur bersama kami dan Kunjungi Destinasi Impian Anda!</h2>
        
          <Link to="add" className="button is-success animate__animated animate__fadeInUp animate__delay-4s">
            Get Started
          </Link>
       
          <h2 style={{fontSize: 20, color: "white", marginTop: 50, textAlign: "left"}}>Untuk Informasi Lebih Lanjut :</h2>
          <h2 style={{fontSize: 20, color: "white", marginTop: 20, textAlign: "left"}}>
            <a href="https://api.whatsapp.com/send?phone=6287717958364&text=Halo!%0ASaya%20ingin%20bertanya%20mengenai%20travel%20ini,%20apakah%20bisa%20dibantu?" target="blank" style={{color: "white"}}>+62 877-1795-8364</a>
          </h2>
          
      </div>
    </div>
    );
  }
}