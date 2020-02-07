CREATE TABLE `competencia` (
	`id` INT NOT NULL AUTO_INCREMENT ,
    `nombre` VARCHAR(70) NOT NULL ,
	`peli_uno_id` INT(11) NOT NULL , 
	`peli_dos_id` INT(11) NOT NULL ,
	PRIMARY KEY (`id`
);

INSERT INTO `peli-vs-peli`(`competencia`, `peli_uno_id`, `peli_dos_id`) VALUES ('¿Cual es la mejor peli?',4,7),
('¿Que peli tiene el mejor protagonista?',6,10),
('¿Que peli es mejor ver un fin de semana?',12,2);


CREATE TABLE `conteo-votos` (
	`id` INT NOT NULL AUTO_INCREMENT ,
    `competencia_id` INT(11) NOT NULL ,
	`peli_id` INT(11) NOT NULL ,
    `votos` INT(11) , 
	PRIMARY KEY (`id`
);