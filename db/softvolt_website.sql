-- phpMyAdmin SQL Dump
-- version 5.0.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 26, 2020 at 05:12 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `softvolt`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` int(50) NOT NULL,
  `content` longtext NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `category_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `title`, `image`, `date`, `content`, `created_at`, `updated_at`, `category_id`) VALUES
(7, 'DFS', 'SDFF', 121212, '', '2012-12-12', '2012-12-12', 1);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `title`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'TEST1', NULL, NULL, NULL),
(2, 'test', NULL, NULL, NULL),
(8, 'category', NULL, NULL, NULL),
(10, 'hjhjhj', NULL, '2020-09-10', '2020-09-10'),
(11, 'hjhjhj', NULL, '2020-09-10', '2020-09-10'),
(12, 'AAAAAAAA', NULL, '2020-09-10', '2020-09-10'),
(13, 'jj', NULL, '2020-09-18', '2020-09-18'),
(14, 'AAAAAAAA', NULL, '2020-09-18', '2020-09-18'),
(15, 'BBBBBB', NULL, '2020-09-18', '2020-09-18'),
(16, 'BBBBBB', NULL, '2020-09-18', '2020-09-18'),
(17, 'BBBBBB', NULL, '2020-09-18', '2020-09-18'),
(18, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(19, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(20, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(21, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(22, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(23, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(24, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(25, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(26, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(27, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(28, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(29, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(30, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(31, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(32, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(33, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(34, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(35, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(36, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(37, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(38, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(39, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(40, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(41, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(42, 'CCCCC', NULL, '2020-09-18', '2020-09-18'),
(43, 'CCCCC', NULL, '2020-09-18', '2020-09-18');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `message` text NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `active` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `email`, `name`, `active`) VALUES
(1, 'test@gmail.com', 'test', 0),
(2, 'test@gmail.com', 'test', 0),
(3, 'test@gmail.com', 'test', 0),
(4, 'test@gmail.com', 'test', 0),
(5, 'test@gmail.com', 'test', 0),
(6, 'test@gmail.com', 'test', 0),
(7, 'test@gmail.com', 'test', 1),
(8, 'test@gmail.com', 'test', 1),
(9, 'test@gmail.com', 'test', 1),
(10, 'test@gmail.com', 'test', 1),
(11, 'test@gmail.com', 'test', 1),
(12, 'test@gmail.com', 'test', 1),
(13, 'test@gmail.com', 'test', 1),
(14, 'test@gmail.com', 'test', 1),
(15, 'test@gmail.com', 'test', 1),
(16, 'test@gmail.com', 'test', 1),
(17, 'test@gmail.com', 'test', 1),
(18, 'test@gmail.com', 'test', 1);

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `auth_key` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password_reset_token` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `verification_token` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Bio` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `status` smallint(6) NOT NULL DEFAULT '10',
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `auth_key`, `password`, `password_reset_token`, `verification_token`, `email`, `Bio`, `status`, `created_at`, `updated_at`, `type`) VALUES
(1, 'asda', 'sdasdasdasdasdasd', 'asdasdasd', 'asdasdasd', 'asdasdasdasdasasdfsadsdasdasdasdas', 'sdasas@gmail.com', 'asdasd', 10, 121212, 121212, 'admin'),
(2, 'AAAAAA', NULL, '1212121212', NULL, NULL, 'hghgg@gmail.com', NULL, 10, NULL, NULL, NULL),
(3, 'AAAAAA', NULL, '1212121212', NULL, NULL, 'hghgg@gmail.com', NULL, 10, NULL, NULL, NULL),
(4, 'asdas', NULL, 'Assalamu Alaikumdasd', NULL, NULL, 'jinasmith12@mailinator.com', NULL, 10, NULL, NULL, NULL),
(5, 'asdas', NULL, 'Assalamu Alaikumdasd', NULL, NULL, 'jinasmith12@mailinatoasdasdar.com', NULL, 10, NULL, NULL, NULL),
(6, 'asdas', NULL, 'Assalamu Alaikumdasd', NULL, NULL, 'jinasmith12@mailinatoasdasdar.com', NULL, 10, NULL, NULL, NULL),
(7, '1', NULL, '1', NULL, NULL, '1', NULL, 10, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

