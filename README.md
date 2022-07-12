<h1 align="center"><strong>Repositório do desafio</strong></h1>

<h2 align="center">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="node" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="express" />
  <img src="https://img.shields.io/badge/mysql-%2301.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql" />
  <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgres" />
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize" />
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="docker" />
</h2>

### Instruções para rodar o projeto:

<br>
<p>1 - Dentro da pasta do repositório, digite o comando abaixo para o docker subir a aplicação:</p>
<code>docker-compose up -d</code>

<br>
<p>2 - Com os containers em execução, digite o comando abaixo para entrar no container da API:</p>
<code>docker exec -it desafio_integracao_api bash</code>

<br>
<p>3 - Dentro do container, execute o comando para criar as tabelas no MySQL:</p>
<code>npm run migration:run</code>

<br>
<p>4 - Ainda dentro do container, execute o comando para criar as tabelas no Postgres:</p>
<code>npm run migration:run:postgres</code>

<br>
<p>5 - Agora execute o comando para rodar a API:</p>
<code>npm run dev</code>
