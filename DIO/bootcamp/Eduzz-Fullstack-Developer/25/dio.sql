CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY AUTOINCREMENT,
    nome VARCHAR(30) AND NOT NULL,
    nascimento DATE
)

INSERT INTO pessoas (nome, nascimento) VALUES('Felipe Alex Bozz','2021-11-25');
INSERT INTO pessoas (nome, nascimento) VALUES('Pessoa 2','2021-11-26');
INSERT INTO pessoas (nome, nascimento) VALUES('Pessoa 3','2021-11-27')

--Aula 02

SELECT * FROM pessoa;
SELECT nome FROM pessoas;

UPDATE pessoas SET nome='Felipe' WHERE id=1;

DELETE FROM pessoa WHERE id=1; --(Muito cuidado com isso, posso até recuperar a informação mas, o PRIMARY KEY não tem volta)

SELECT * FROM pessoas ORDER BY nome; -- ordem crescente
SELECT * FROM pessoas ORDER BY nome DESC; -- oredem decrescente

--Como realizar o agrupamento?

