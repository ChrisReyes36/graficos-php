-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         10.4.24-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para graficos_php
CREATE DATABASE IF NOT EXISTS `graficos_php` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci */;
USE `graficos_php`;

-- Volcando estructura para tabla graficos_php.producto
CREATE TABLE IF NOT EXISTS `producto` (
  `producto_id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_nombre` text COLLATE utf8_spanish2_ci NOT NULL,
  `producto_stock` int(11) NOT NULL,
  PRIMARY KEY (`producto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- Volcando datos para la tabla graficos_php.producto: ~8 rows (aproximadamente)
DELETE FROM `producto`;
INSERT INTO `producto` (`producto_id`, `producto_nombre`, `producto_stock`) VALUES
	(1, 'GASEOSA', 20),
	(2, 'CHOCOLATES', 5),
	(3, 'YOGURT', 10),
	(4, 'SNACK', 3),
	(5, 'ACEITE', 6),
	(6, 'JUGO', 15),
	(7, 'LÁPIZ', 10),
	(8, 'BORRADOR', 8);

-- Volcando estructura para procedimiento graficos_php.SP_DatosGraficoBar
DELIMITER //
CREATE PROCEDURE `SP_DatosGraficoBar`()
SELECT * FROM producto//
DELIMITER ;

-- Volcando estructura para procedimiento graficos_php.SP_DatosGraficoPara
DELIMITER //
CREATE PROCEDURE `SP_DatosGraficoPara`(IN fechaInicio VARCHAR(15), IN fechaFin VARCHAR(15))
SELECT
	producto.producto_nombre, 
	SUM(venta.venta_cantidad) AS cantidad
FROM
	venta
	INNER JOIN
	producto
	ON 
		venta.producto_id = producto.producto_id
	WHERE
		YEAR(venta.venta_feregistro) BETWEEN fechaInicio AND fechaFin
	GROUP BY producto.producto_id//
DELIMITER ;

-- Volcando estructura para tabla graficos_php.venta
CREATE TABLE IF NOT EXISTS `venta` (
  `venta_id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) NOT NULL,
  `venta_cantidad` int(11) NOT NULL,
  `venta_feregistro` date NOT NULL,
  PRIMARY KEY (`venta_id`),
  KEY `fk_venta_producto` (`producto_id`),
  CONSTRAINT `fk_venta_producto` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`producto_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- Volcando datos para la tabla graficos_php.venta: ~7 rows (aproximadamente)
DELETE FROM `venta`;
INSERT INTO `venta` (`venta_id`, `producto_id`, `venta_cantidad`, `venta_feregistro`) VALUES
	(1, 1, 10, '2019-05-05'),
	(2, 1, 2, '2020-05-11'),
	(3, 6, 3, '2020-05-22'),
	(4, 8, 5, '2020-05-22'),
	(5, 8, 3, '2020-05-22'),
	(6, 4, 15, '2020-05-22'),
	(7, 5, 15, '2020-05-22');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
