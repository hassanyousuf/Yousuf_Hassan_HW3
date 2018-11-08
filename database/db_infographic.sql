-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 06, 2018 at 01:15 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_infographic`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_info`
--

DROP TABLE IF EXISTS `tbl_info`;
CREATE TABLE IF NOT EXISTS `tbl_info` (
  `ID` int(100) NOT NULL AUTO_INCREMENT,
  `heading` text NOT NULL,
  `paragraph` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_info`
--

INSERT INTO `tbl_info` (`ID`, `heading`, `paragraph`) VALUES
(1, 'Every great burger begins with a bun.', 'Artisanal potato bun provides the right amount of lift, softness, and texture.'),
(2, 'One way ticket to flavor town!', 'House-made burger sauce (ketchup, mustard, mayo, relish, dried minced herbs). Vegan mayo alternative available.'),
(3, 'Micro greens', 'Bean sprouts provide a nutty and delicate flavor, as well as crisp and fresh texture.'),
(4, 'Would you like chips with that?', 'Battered and fried julienne cut onions. Rich taste with a satisfying crunch.'),
(5, 'Sweet and tangy', 'Pickle slices provide awesome depth of flavor. Can be substituted with avocado slices.'),
(6, 'Seasonal tomato slice', 'In season tomatoes are bursting with flavor. JUICY!'),
(7, 'Not your Dad\'s cheese!', 'Unlike other cheeses. Whom must not be name. Deli-sliced golden American cheese is a cut above. While keeping its melty  charm.'),
(8, 'Meant to bean!', 'Tastefully spiced black bean patty. No meat to be found here. Excellent source of protein and new cravings.'),
(9, 'Red leaf lettuce', 'Hand-picked for its dynamic color. Provides a moisture barrier between patty and bottom bun.'),
(10, 'Every bite, every flavor', 'Vegan garlic Aoili is spread edge to edge of the bun. ensuring that there is never a dull bite.'),
(11, 'It\'s not a burger until...', 'The bottom bun, toasted to perfection, it\'s a fitting end cap.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
