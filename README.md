# Back-end TaskMe
  Servidor de Tarefas ("Tasks") ✔️

# Oque é?
  - É um back-end de um projeto web de tasks, na qual o usuário consegue criar tasks para seu dia a dia,
  - depois das tarefas serem realizadas, elas podem ser marcadas como "concluidas".

# Como Foi Desenvolvida?
  - Express.js
  - TypeScript
  - Prisma ORM
  - JsonWebToken
  - Multer
  - Bcrypt
  - Docker PostgreSQL
  - Documentação com Swagger

# Como utilizar?
  * Clone o repositório para sua máquina
  * Instale as depêndencias digitando "yarn" ou "npm install" no seu console
  * Suba o docker postgres com "docker-compose up"
> Caso prefira, configure a string de conexão com o seu banco no .env
> Lembre também que se você mudar o banco de dados, será necessario indicar no arquivo prisma.chema dentro da pasta prisma na opção "provider"
  * Rode "yarn prisma db push" ou "npx prisma db push" para aplicar as mudanças no banco
  * Rode "yarn start" ou "npm start" para subir o servidor!
 
 
> As documentações dos endpoints serão encontradas em http://localhost:3000/api-docs
