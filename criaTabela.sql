create table livros (
    id int(11) not null primary key auto_increment,
    titulo varchar(255) default null,
    descricao text,
    preco decimal(10, 2) default null
);