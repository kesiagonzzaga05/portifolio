use("portifolio");
db.dropDatabase();

db.createCollection("contato");
db.createCollection("trabalhos");


db.contato.insertOne(
  {
    id:ObjectId(111111111111),
    telefone: 84547003,
    email:"kesiagonzaga@estudante.ifms.edu.br",
    endereco:"Rua Noruega 147 - Centro",
    feedback:"Adicione sua avaliação"

  }
), 
db.trabalhos.insertOne(
  {
    trabalho:"projeto CCM",
    descricao:"O projeto foi desenvolvido presencialmente para e com estudantes do IFMS,por meio de palestras e vivências. Integrou a Comissão Organizadora servidores(as) e estudantes do Projeto de Extensão Manifestações da Cultura Corporal de Movimento,coordenado pela professora Catia Silvana da Costa. Clique para ver os projetos!
  }
),
db.trabalhos.insertOne(
  {
    trabalho:"FeciNavi",
    descricao:"O IFMS, promove as Feiras de Ciência e Tecnologia para a apresentação de trabalhos dos alunos. Os eventos fazem parte da programação da Semana de Ciência e Tecnologia. Clique para ver meu projeto!",
  }
),
db.trabalhos.insertOne(
  {
  trabalho:"Trabalhos Acadêmicos",
  descricao:"Todos os trabalhos acadêmicos realizados por mim e desenvolvidos com a linguagem de programação Html, JavaScript. Clique para ver meus projetos!",
  }
),
db.trabalhos.insertOne(
  {
  trabalho:"Viagem Técnica",
  descricao:"O IFMS, realizou uma viagem técnica com os alunos para Foz do Iguaçu. Visitamos a Usina Hidrelétrica Binacional Itaipu e as Cataratas do Iguaçu. Clique para ver as fotos da nossa viagem!",
  }
)