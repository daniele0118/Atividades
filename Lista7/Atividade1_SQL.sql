CREATE DATABASE db_rh;

USE db_rh;

CREATE TABLE tb_colaboradores(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	idade INT,
    salario DECIMAL(6,2),
	cargo VARCHAR(255)
);

INSERT INTO tb_colaboradores(nome, idade, salario, cargo) 
VALUES ("Greed",200, 4000.00, "Eletricista");
INSERT INTO tb_colaboradores(nome, idade, salario, cargo) 
VALUES ("Envy",175, 1950.00, "Motorista");
INSERT INTO tb_colaboradores(nome, idade, salario, cargo) 
VALUES ("Lust",250, 5250.00, "Contadora");
INSERT INTO tb_colaboradores(nome, idade, salario, cargo) 
VALUES ("Pride",350, 9600.00, "Gerente");
INSERT INTO tb_colaboradores(nome, idade, salario, cargo) 
VALUES ("Wrath",60, 8400.00, "Líder");
INSERT INTO tb_colaboradores(nome, idade, salario, cargo) 
VALUES ("Gluttony",160, 1900.00, "Cozinheiro");
INSERT INTO tb_colaboradores(nome, idade, salario, cargo) 
VALUES ("Sloth",150, 4000.00, "Eletricista");

SELECT * FROM tb_colaboradores;

SELECT * FROM tb_colaboradores WHERE salario > 2000;
SELECT * FROM tb_colaboradores WHERE salario < 2000;

UPDATE tb_colaboradores SET salario = 1800.00 WHERE Id = 4;

