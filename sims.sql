-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 12, 2019 at 10:06 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sims`
--

-- --------------------------------------------------------

--
-- Table structure for table `administration`
--

CREATE TABLE `administration` (
  `Admin_ID` int(11) NOT NULL,
  `Admin_name` varchar(30) NOT NULL,
  `Password` char(128) NOT NULL,
  `Email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `SINo` int(11) NOT NULL,
  `Department_ID` varchar(10) NOT NULL,
  `Name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `SINo` int(11) NOT NULL,
  `Faculty_ID` varchar(20) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Email_ID` varchar(20) NOT NULL,
  `Password` char(128) NOT NULL,
  `Add_Admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_attempts`
--

CREATE TABLE `faculty_attempts` (
  `faculty_ID` varchar(20) NOT NULL,
  `Time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_details`
--

CREATE TABLE `faculty_details` (
  `SINo` int(11) NOT NULL,
  `Faculty_ID` varchar(20) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Gender` enum('Male','Female','Others','') NOT NULL,
  `DOB` date NOT NULL,
  `Designation` varchar(30) NOT NULL,
  `Department` varchar(10) NOT NULL,
  `Line1` varchar(50) NOT NULL,
  `Line2` varchar(50) DEFAULT NULL,
  `Line3` varchar(50) DEFAULT NULL,
  `City` varchar(20) NOT NULL,
  `District` varchar(20) NOT NULL,
  `Pincode` int(6) NOT NULL,
  `Cell_Number` bigint(10) NOT NULL,
  `Experience` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `marks`
--

CREATE TABLE `marks` (
  `SINo` bigint(20) NOT NULL,
  `Department_ID` varchar(10) NOT NULL,
  `Faculty_ID` varchar(20) NOT NULL,
  `Student_ID` varchar(20) NOT NULL,
  `Batch` varchar(10) NOT NULL,
  `Semester` int(11) NOT NULL,
  `Subject_Code` varchar(10) NOT NULL,
  `Internal` int(11) NOT NULL,
  `External` int(11) NOT NULL,
  `Total` int(11) NOT NULL,
  `Grade` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `SINo` bigint(20) NOT NULL,
  `Student_ID` varchar(20) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Email_ID` varchar(30) NOT NULL,
  `Password` char(128) NOT NULL,
  `Add_admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `students_details`
--

CREATE TABLE `students_details` (
  `SINo` bigint(20) NOT NULL,
  `Student_ID` varchar(20) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Father_name` varchar(30) NOT NULL,
  `Gender` enum('Male','Female','Others','') NOT NULL,
  `DOB` date NOT NULL,
  `Department` varchar(10) NOT NULL,
  `Batch` varchar(10) NOT NULL,
  `Line1` varchar(50) NOT NULL,
  `Line2` varchar(50) DEFAULT NULL,
  `Line3` varchar(50) DEFAULT NULL,
  `City` varchar(20) NOT NULL,
  `District` varchar(20) NOT NULL,
  `Pincode` int(6) NOT NULL,
  `Cell_Number` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student_attempts`
--

CREATE TABLE `student_attempts` (
  `Student_ID` varchar(20) NOT NULL,
  `Time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `SINo` int(11) NOT NULL,
  `Department_ID` varchar(10) NOT NULL,
  `Subject_Code` varchar(10) NOT NULL,
  `Subject_Name` varchar(30) NOT NULL,
  `Semester` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_attempts`
--

CREATE TABLE `user_attempts` (
  `User_id` int(11) NOT NULL,
  `Time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administration`
--
ALTER TABLE `administration`
  ADD PRIMARY KEY (`Admin_ID`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`SINo`),
  ADD UNIQUE KEY `Department_ID` (`Department_ID`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`SINo`),
  ADD UNIQUE KEY `Faculty_ID` (`Faculty_ID`),
  ADD KEY `Admin` (`Add_Admin`),
  ADD KEY `Admin_2` (`Add_Admin`),
  ADD KEY `Admin_3` (`Add_Admin`),
  ADD KEY `Add_Admin` (`Add_Admin`);

--
-- Indexes for table `faculty_details`
--
ALTER TABLE `faculty_details`
  ADD PRIMARY KEY (`SINo`),
  ADD KEY `Faculty_ID` (`Faculty_ID`),
  ADD KEY `Department` (`Department`);

--
-- Indexes for table `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`SINo`),
  ADD KEY `Faculty_ID` (`Faculty_ID`),
  ADD KEY `Department_ID` (`Department_ID`),
  ADD KEY `Subject_Code` (`Subject_Code`),
  ADD KEY `Student_ID` (`Student_ID`),
  ADD KEY `Semester` (`Semester`),
  ADD KEY `Batch` (`Batch`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`SINo`),
  ADD UNIQUE KEY `Student_ID` (`Student_ID`),
  ADD UNIQUE KEY `Email_ID` (`Email_ID`),
  ADD KEY `Add_admin` (`Add_admin`);

--
-- Indexes for table `students_details`
--
ALTER TABLE `students_details`
  ADD PRIMARY KEY (`SINo`),
  ADD KEY `Student_ID` (`Student_ID`),
  ADD KEY `Department` (`Department`),
  ADD KEY `Batch` (`Batch`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`SINo`),
  ADD UNIQUE KEY `Subject_Code` (`Subject_Code`),
  ADD KEY `Department_ID` (`Department_ID`),
  ADD KEY `Semester` (`Semester`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administration`
--
ALTER TABLE `administration`
  MODIFY `Admin_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `SINo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `SINo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_details`
--
ALTER TABLE `faculty_details`
  MODIFY `SINo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `marks`
--
ALTER TABLE `marks`
  MODIFY `SINo` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `SINo` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students_details`
--
ALTER TABLE `students_details`
  MODIFY `SINo` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `SINo` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `faculty`
--
ALTER TABLE `faculty`
  ADD CONSTRAINT `Faculty_admin_fk` FOREIGN KEY (`Add_Admin`) REFERENCES `administration` (`Admin_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `faculty_details`
--
ALTER TABLE `faculty_details`
  ADD CONSTRAINT `Faculty_dep_fk` FOREIGN KEY (`Department`) REFERENCES `department` (`Department_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Faculty_id_fk` FOREIGN KEY (`Faculty_ID`) REFERENCES `faculty` (`Faculty_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `marks`
--
ALTER TABLE `marks`
  ADD CONSTRAINT `marks_batch_fk` FOREIGN KEY (`Batch`) REFERENCES `students_details` (`Batch`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `marks_department_fk` FOREIGN KEY (`Department_ID`) REFERENCES `department` (`Department_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `marks_faculty_fk` FOREIGN KEY (`Faculty_ID`) REFERENCES `faculty` (`Faculty_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `marks_sem_fk` FOREIGN KEY (`Semester`) REFERENCES `subjects` (`Semester`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `marks_student_fk` FOREIGN KEY (`Student_ID`) REFERENCES `students` (`Student_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `marks_subject_fk` FOREIGN KEY (`Subject_Code`) REFERENCES `subjects` (`Subject_Code`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `student_admin_fk` FOREIGN KEY (`Add_admin`) REFERENCES `administration` (`Admin_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `students_details`
--
ALTER TABLE `students_details`
  ADD CONSTRAINT `Student_dep_fk` FOREIGN KEY (`Department`) REFERENCES `department` (`Department_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Student_details_fk` FOREIGN KEY (`Student_ID`) REFERENCES `students` (`Student_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `Sub_dep_fk` FOREIGN KEY (`Department_ID`) REFERENCES `department` (`Department_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
