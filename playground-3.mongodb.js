use("db-patisier");
db.dropDatabase();

db.createCollection("cake");
use("db-patisier");
db.cake.insertOne(
    {
        _id:ObjectId(111111111111),
        nome:"Naked Cake",
        peso: "2 kg",
        preco: 150,
        ingredientes:[
            {
                nome: "Trigo",
                quantidade: "2 xicaras de trigo"
            },
            {
                nome: "Leite",
                quantidade: "3/4 de leite"
            },
            {
                nome: "Ovo",
                quantidade: "3 ovos"
            }
        ]
    }
)
db.cake.insertOne(
    {
        _id:ObjectId(222222222222),
        nome: "Morangoffe",
        peso: "1 kg",
        preco: 130,
        ingredientes:[
            {
                nome: "bolacha oreo",
                quantidade: "2 pacotes"
            },
            {
                nome: "suspiro",
                quantidade: "300 gramas"
            },
            {
                nome: "morango",
                quantidade: "2 caixinhas"
            }
        ]
    }
)
db.cake.insertOne(
    {
        _id:ObjectId(333333333333),
        nome:"Bombom Aberto",
        peso:"500gr",
        preco: 69,
        ingredientes:[
            {
                nome: "Leite Condensado",
                quantidade: "3 caixinhas"
            },
            {
                nome: "Barra de Chocolate",
                quantidade: "3 barras"
            },
            {
                nome: "Creme de Leite",
                quantidade: "1 caixinha"
            }
        ]
    }
)
db.cake.insertOne(
    {
        _id:ObjectId(4444444444444),
        nome:"Pizza Brownie",
        peso:"400gr",
        preco: 70,
        ingredientes:[
            {
                nome: "Ovos",
                quantidade: "4 Ovos"
            },
            {
                nome: "Manteiga",
                quantidade: "5 colheres de sopa"
            },
            {
                nome: "Cacau em Pó",
                quantidade: "1/2 Xícara"
            }
        ]
    }
)

//Excluir o documento de _id=1:
db.cake.deleteOne({_id:ObjectId("debd01c7150888a66008876a")});
//Listar nome e preço dos bolos:
use("db-patisier");
db.cake.find({},
    {_id:0, nome:1, preco:1}
    );
//Listar nome e preço dos bolos com valor menor ou igual a 70:
use("db-patisier");
db.cake.find({preco:{$lte:70}},{_id:0, nome:1, preco:1});
//Criar uma consulta (update) que mude o nome, peso e ingredientes no bolo de _id=2:
use("db-patisier");
db.cake.updateOne(
    {_id: ObjectId('"00000002e8d5282804639c02"')}, 
    {$set:{nome:"novo cake", peso:"novo peso",}},
    {$push:{ingrediente:{nome:"novo ingrediente",quantidade:"1"},}}
)
//Criar update que modifique 1 ingrediente de _id=4 para: ovos e qant: 3
db.cake.updateOne(
    {id:ObjectId("00000003697f20861efcb3fb"), "ingrediente.nome":"ovos"},
    {
        $set:{
            "ingrediente.$.quantidade":3,
        }
    }
);