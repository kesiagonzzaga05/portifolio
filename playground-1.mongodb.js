// const collection = 'NEW_COLLECTION_NAME';

//CREATE DATABASE TEST
//USE TEST
use("test");
//Apagando a collection antes de inserir novos dados.
db.dono.drop();

//Código para criar uma nova collection
db.createCollection("dono");

//Código para inserir vários dados em uma collection criada anteriormente
db.dono.insertOne(
    {_id:1,nome:"Macarrão",preco:29.99,ingredientes:"Macarrão"},
    {_id:2,nome:"Strogonoff",preco:59.99,ingredientes:"Carne Wagyu e Arroz"},
    {_id:3,nome:"Pirão",preco:50,ingredientes:"Farinha, Frango Caipira, Arroz"},
    {_id:4,nome:"Rozcowvo",preco:29.99,ingredientes:"Ovo, Arroz, Feijão"},
    {_id:5,nome:"Prato do Dia",preco:10.99,ingredientes:"Arroz, Feijão e Bife"}
)

//SELECT * FROM test.cardapio;

//No mongo para selecionar vamos usar o comando find

//devolve todos os dados da collection
db.cardapio.find();

//Filtrando pelo nome
//SELECT * FROM cardapio where nome="Macarrão"; 
db.cardapio.find({nome:"Macarrão"});

//Para selecionar as colunas usamos a projeção
//SELECT nome, preco FROM cardapio where nome="Macarrão"; 
db.cardapio.find({nome:"Macarrão"},{nome:true,preco:true});

//FIND ({QUERY},{PROJEÇÃO})

//como deletar 
db.cardapio.deleteOne({_id:1})

//deletar tudo 
db.cardapio.deleteMany({})

