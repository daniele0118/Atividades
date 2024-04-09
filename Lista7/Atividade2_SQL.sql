CREATE DATABASE db_ecommerce;

USE db_ecommerce;

CREATE TABLE tb_roupas(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
	tipo VARCHAR(255) NOT NULL,
	cor VARCHAR(255),
    tamanho VARCHAR(255),
	preco DECIMAL(6,2)
);

INSERT INTO tb_roupas(tipo, cor, tamanho, preco) 
VALUES ("Blusa","Preta", "P", 29.98),
("Blusa","Branca", "M", 500.98),
("Calça","Preta", "M", 699.99),
("Short","Jeans", "G", 36.99),
("Saia","Branca", "G", 24.99),
("Vestido","Rosa", "P", 729.30);

SELECT * FROM tb_roupas WHERE preco > 500;
SELECT * FROM tb_roupas WHERE preco < 500;

UPDATE tb_roupas SET preco = 669.99 WHERE Id = 3;

SELECT * FROM tb_roupas; 










