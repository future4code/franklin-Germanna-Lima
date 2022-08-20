
### Exercício 1
A) VARCHAR - É uma sequeência de caracter de texto que forma uma string com números caracters podem ser definidos
DATE - Formato de data

B) SHOW DATABASE - mostra os bancos de dados presentes no host
SHOW TABLES - mostra as tabelas presentes em um banco de dados

C) Apresenta as informações da tabela actor criada com o id, name, salary e outra informações em formato de tabela

### Exercício 2
B) 16:20:46	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES (  "002",     "Gloria Pires",     1200000,     "1963-08-23",     "female" )	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0,210 sec (Key Primary  repetida)

C)16:22:07 INSERT INTO Ator (id, nome, salário) VALUES( "003", "Fernanda Montenegro", 300000, "1929-10-19", "female" ) Código de erro: 1136. A contagem de colunas não contagem de valor de correspondência na linha 1 0,213 s

o número de colunas declaradas é menor que o número de valores passados

# Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

D)
16:42:51 INSERT INTO Ator (id, salário, data_nascimento, sexo) VALUES( "004", 400000, "1949-04-18", "male" ) Código do erro: 1364. O campo 'name' não possui um valor padrão 0,198 seg

O nome é um campo obrigatório

# Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

E)
16:47:12 INSERT INTO Ator (id, nome, salário, data_nascimento, sexo) VALUES( "005", "Juliana Paes", 719333.33, 1979-03-26, "female" ) Código do erro: 1292. Valor de data incorreto : '1950' para a coluna 'birth_date' na linha 1 0,206 seg

data deve estar entre ""

# Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### Exercício 3
A)SELECT id, name from Actor WHERE gender = "female";
B)SELECT id, salary from Actor WHERE name = "Tony Ramos";
C)Não teve nenhum resultado, pois não existe linha com genero invalido
D)SELECT id, name, salary from Actor WHERE salary > 500000;
E)Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

O nome do campo é name

# Correção:
SELECT id, name from Actor WHERE id = "002"

### Exercício 4
A)Permite realizar mais de uma condicional para verifficar os dados na tabela

B)SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

C)SELECT * FROM Actor
WHERE (name LIKE "%G%" or name LIKE "%g%");

D)SELECT * FROM Actor
WHERE (name LIKE "%G%" or name LIKE "%g%") AND salary between 350000 and 900000 ;

### Exercício 6
A)
B)
C)
D)
E)
### Exercício 7
A)
B)
C)
D)
E)
