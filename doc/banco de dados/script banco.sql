-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema facetravels
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema facetravels
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `facetravels` DEFAULT CHARACTER SET utf8 ;
USE `facetravels` ;

-- -----------------------------------------------------
-- Table `facetravels`.`regra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `facetravels`.`regra` (
  `id_regra` INT NOT NULL AUTO_INCREMENT,
  `descricao` ENUM('ADM', 'PADRAO', 'VIP') NULL,
  PRIMARY KEY (`id_regra`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `facetravels`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `facetravels`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NULL,
  `login` VARCHAR(50) NULL,
  `senha` VARCHAR(300) NULL,
  `id_facebook` VARCHAR(300) NULL,
  `sexo` VARCHAR(10) NULL,
  `id_regra` INT NOT NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `fk_usuario_regras_idx` (`id_regra` ASC),
  CONSTRAINT `fk_usuario_regras`
    FOREIGN KEY (`id_regra`)
    REFERENCES `facetravels`.`regra` (`id_regra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `facetravels`.`mapa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `facetravels`.`mapa` (
  `id_mapa` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NULL,
  PRIMARY KEY (`id_mapa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `facetravels`.`marcador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `facetravels`.`marcador` (
  `id_marcador` INT NOT NULL AUTO_INCREMENT,
  `id_mapa` INT NOT NULL,
  `nome` VARCHAR(100) NULL,
  `descricao` VARCHAR(255) NULL,
  `latitude` DECIMAL NOT NULL,
  `logitude` DECIMAL NOT NULL,
  `icon` VARCHAR(255) NULL,
  `foto` VARCHAR(255) NULL,
  PRIMARY KEY (`id_marcador`),
  INDEX `fk_marcador_mapa1_idx` (`id_mapa` ASC),
  CONSTRAINT `fk_marcador_mapa1`
    FOREIGN KEY (`id_mapa`)
    REFERENCES `facetravels`.`mapa` (`id_mapa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `facetravels`.`usuario_mapa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `facetravels`.`usuario_mapa` (
  `id_mapa` INT NOT NULL,
  `id_usuario` INT NOT NULL,
  INDEX `fk_usuario_mapa_mapa1_idx` (`id_mapa` ASC),
  INDEX `fk_usuario_mapa_usuario1_idx` (`id_usuario` ASC),
  CONSTRAINT `fk_usuario_mapa_mapa1`
    FOREIGN KEY (`id_mapa`)
    REFERENCES `facetravels`.`mapa` (`id_mapa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_mapa_usuario1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `facetravels`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `facetravels`.`comentario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `facetravels`.`comentario` (
  `id_comentario` INT NOT NULL AUTO_INCREMENT,
  `texto` VARCHAR(500) NOT NULL,
  `id_mapa` INT NOT NULL,
  `id_usuario` INT NOT NULL,
  `data` DATETIME NOT NULL,
  PRIMARY KEY (`id_comentario`),
  INDEX `fk_comentario_mapa1_idx` (`id_mapa` ASC),
  INDEX `fk_comentario_usuario1_idx` (`id_usuario` ASC),
  CONSTRAINT `fk_comentario_mapa1`
    FOREIGN KEY (`id_mapa`)
    REFERENCES `facetravels`.`mapa` (`id_mapa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentario_usuario1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `facetravels`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
