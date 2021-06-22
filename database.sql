-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: dinodanger
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dinosaur`
--

DROP TABLE IF EXISTS `dinosaur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dinosaur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `species` varchar(255) NOT NULL,
  `diet` varchar(255) DEFAULT NULL,
  `era_id` int NOT NULL,
  PRIMARY KEY (`id`,`era_id`),
  KEY `fk_dinosaur_era_idx` (`era_id`),
  CONSTRAINT `fk_dinosaur_era` FOREIGN KEY (`era_id`) REFERENCES `era` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dinosaur`
--

LOCK TABLES `dinosaur` WRITE;
/*!40000 ALTER TABLE `dinosaur` DISABLE KEYS */;
INSERT INTO `dinosaur` VALUES (1,'Alwalkeria','omnivorous',1),(2,'Camposaurus','carnivorous',1),(3,'Plateosaurus','herbivorous',1),(4,'Brachiosaurus','herbivorous',2),(5,'Diplodocus','herbivorous',2),(6,'Stegosaurus','herbivorous',2),(7,'Megalosaurus','carnivorous',2),(8,'Deinonychus','carnivorous',3),(9,'Tyrannosaurus','carnivorous',3),(10,'Triceratops','herbivorous',3);
/*!40000 ALTER TABLE `dinosaur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `era`
--

DROP TABLE IF EXISTS `era`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `era` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `era`
--

LOCK TABLES `era` WRITE;
/*!40000 ALTER TABLE `era` DISABLE KEYS */;
INSERT INTO `era` VALUES (1,'Triassic','252-201 million years ago'),(2,'Jurassic','201-145 million years ago'),(3,'Cretaceous','145-66 million years ago');
/*!40000 ALTER TABLE `era` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-22 15:56:57
