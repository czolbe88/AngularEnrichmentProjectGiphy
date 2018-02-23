-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema angularenrichment
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema angularenrichment
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `angularenrichment` DEFAULT CHARACTER SET utf8 ;
USE `angularenrichment` ;

-- -----------------------------------------------------
-- Table `angularenrichment`.`gif`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `angularenrichment`.`gif` (
  `IndexNumber` INT(11) NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(200) NULL DEFAULT NULL,
  `Url` VARCHAR(200) NULL DEFAULT NULL,
  `User` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`IndexNumber`),
  UNIQUE INDEX `IndexNumber_UNIQUE` (`IndexNumber` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
