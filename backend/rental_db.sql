-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 09 Des 2023 pada 18.17
-- Versi server: 10.1.38-MariaDB
-- Versi PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rental_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `mobil`
--

CREATE TABLE `mobil` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `harga` int(25) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `mobil`
--

INSERT INTO `mobil` (`id`, `nama`, `harga`, `foto`, `createdAt`, `updatedAt`) VALUES
(1, 'Toyota Agya', 250000, 'https://4.bp.blogspot.com/-7BV6UI4s6UI/U0u_JCuOMZI/AAAAAAAAB60/4ZOhXuuDsgU/s1600/Daftar+Harga+Mobil+Toyota+Agya+Terbaru+2014.jpg', '2023-12-08 15:31:46', '2023-12-08 15:31:46'),
(2, 'Toyota Alphard', 1000000, 'https://imgcdn.oto.com/large/gallery/color/38/1917/toyota-alphard-color-856953.jpg', '2023-12-08 16:07:57', '2023-12-08 16:10:35'),
(3, 'Innova Zenix', 500000, 'https://cdn.motor1.com/images/mgl/QeYwvO/s3/toyota-innova-zenix.jpg', '2023-12-08 16:16:32', '2023-12-08 16:16:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pembayaran`
--

CREATE TABLE `pembayaran` (
  `id` int(11) NOT NULL,
  `metodeBayar` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nama_penyewa` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `tgl_sewa` varchar(255) DEFAULT NULL,
  `durasi` int(11) DEFAULT NULL,
  `lokasi_ambil` varchar(255) DEFAULT NULL,
  `lokasi_kembali` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `no_telp` varchar(255) DEFAULT NULL,
  `totalHarga` int(11) DEFAULT NULL,
  `mobId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `nama_penyewa`, `alamat`, `tgl_sewa`, `durasi`, `lokasi_ambil`, `lokasi_kembali`, `email`, `no_telp`, `totalHarga`, `mobId`, `createdAt`, `updatedAt`) VALUES
(1, 'arfan', 'Karawaci', '12-12-2023', 2, 'Diantar', 'Di kantor', 'arfan@gmail.com', '081299219213', 0, 1, '2023-12-08 15:31:53', '2023-12-08 15:31:53'),
(2, 'arfan', 'Karawaci', '12-12-2023', 2, 'Diantar', 'Di kantor', 'arfan@gmail.com', '081299219213', 150000, 1, '2023-12-08 15:34:36', '2023-12-08 15:34:36'),
(3, 'van', 'jalan kenangan', '2023-12-08', NULL, 'kantor', 'kantor', 'van@gmail.com', '08959129374', NULL, 1, '2023-12-08 15:38:01', '2023-12-08 15:38:01'),
(4, 'van', 'jalan kenangan', '2023-12-08', 2, 'kantor', 'kantor', 'van@gmail.com', '08959129374', NULL, 1, '2023-12-08 15:40:08', '2023-12-08 15:40:08'),
(5, 'van', 'jalan kenangan', '2023-12-08', 2, 'kantor', 'kantor', 'van@gmail.com', '08959129374', NULL, 1, '2023-12-08 15:41:05', '2023-12-08 15:41:05'),
(6, 'van', 'jalan kenangan', '2023-12-08', 3, 'kantor', 'kantor', 'van@gmail.com', '08959129374', 0, 1, '2023-12-08 15:50:45', '2023-12-08 15:50:45'),
(7, 'Muhammad Arfan', 'jl.sangego raya no.32 rt/rw 03/04', '', 1, 'kantor', 'kantor', 'arfanm32@gmail.com', '08959129374', 0, 1, '2023-12-08 17:44:14', '2023-12-08 17:44:14'),
(8, 'Muhammad Arfan', 'jl.sangego raya no.32 rt/rw 03/04', '2023-12-09', 1, 'kantor', 'kantor', 'arfanm32@gmail.com', '08959129374', 0, 1, '2023-12-08 17:44:57', '2023-12-08 17:44:57'),
(9, 'Muhammad Arfan', 'jl.sangego raya no.32 rt/rw 03/04', '2023-12-09', 1, 'kantor', 'kantor', 'arfanm32@gmail.com', '08959129374', 1000000, 1, '2023-12-08 17:45:34', '2023-12-08 17:45:34'),
(10, '', '', '', 2, '', '', '', '', 500000, 1, '2023-12-08 17:49:33', '2023-12-08 17:49:33');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `mobil`
--
ALTER TABLE `mobil`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mobId` (`mobId`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `mobil`
--
ALTER TABLE `mobil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `pembayaran`
--
ALTER TABLE `pembayaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD CONSTRAINT `pembayaran_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`mobId`) REFERENCES `mobil` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
