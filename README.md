# Football Manager

**Football Manager** é um projeto de estudo construído do zero, que abrange desde o banco de dados e backend até o frontend. O objetivo do projeto é gerenciar jogadores e times de futebol, oferecendo funcionalidades como listagem, criação, edição e exclusão de jogadores e times.

## Funcionalidades

- **Gerenciamento de Jogadores**: Listagem, criação, edição e exclusão de jogadores.
- **Gerenciamento de Times**: Listagem, criação, edição e exclusão de times.
- **Interface de Usuário**: Interface amigável construída com Next.js e TypeScript.
- **Backend**: Desenvolvido com Node.js e Prisma ORM para interações com o banco de dados.

## Tecnologias Utilizadas

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Node.js, Express
- **Banco de Dados**: Prisma ORM com SQLite
- **Bibliotecas Adicionais**: 
  - **Axios**: Para realizar requisições HTTP.
  - **SweetAlert2**: Para exibir alertas customizados na interface.

## Instalação e Configuração

### Pré-requisitos

- Node.js e npm instalados
- Banco de dados configurado com Prisma

### Passos para Instalação

**1. Clone o repositório:**

`   git clone https://github.com/maiscafe/fbmfront.git`


**2. Instale as dependências:**
>  Atualize em todos os package.json (prisma, backend, frontend)
`npm install`

 **3. Configure o Banco de Dados:**
> Mantenha o prisma fora das pastas backend e frontend para não precisar reconfigurar as variáveis

##  Rotas da API

### Jogadores
` POST /player/list-players: Retorna a lista de jogadores.`
> body: {
	"id": int,
	"name": string,
	"team_id": int
}

` PUT /player/update-player: Atualiza os dados de um jogador`
> body: {
	"id": int,
	"name": string,
	"team_id": int,
	"age": int
	}

` POST /player/new-player: Cria um novo jogador. `
> body: {
	"id": int,
	"name": string,
	"team_id": int,
	"age": int
}

` DELETE /player/delete-player: Exclui um jogador.  `
> body: {
	"id": int
	}

## Times
`POST /team/list-teams: Retorna a lista de times.`
> body: {
	"id": int,
	"name": string,
	"team_id": int
}

` PUT /team/update-team: Atualiza os dados de um time`
> body: {
	"name": string,
	}
	
`POST /team/new-team: Cria um novo time.`
> body: {
	"name": string
	}

`DELETE /team/delete-team: Exclui um time.`
> body: {
	"id": int
	}

Licença
Este projeto está licenciado sob a Licença MIT.
