# Parâmetros

## Usuários do sistema

- Administrador de clínica

  - Ator que coordena as funcionalidades que requerem credenciais mais elevadas. Está no topo da hierarquia de permissões do sistema no contexto de uma clínica médica.

  - Nome da role: 'admin-clinica'



### Secretário 
        Ator que realiza funções de agendamento e que opera o núcleo do sistema, para organizar horários dos pacientes &
        Diária &
        Média \\ \hline
        
        3 &
        Enfermeiro &
        Ator que tem acesso às informações sobre os pacientes e pode inserir informações sobre novas consultas realizadas &
        Diária &
        Baixa \\ \hline
        
        4 &
        Médico &
        Ator que tem acesso às informações dos pacientes e pode inserir informações sobre novas consultas realizadas. &
        Diária &
        Baixa \\ \hline
        
        5 &
        Pais de crianças  &
        Ator que tem acesso às informações inseridas sobre as consultas realizadas em seu filho, além de ter uso de inserção de algumas informações úteis a respeito do desenvolvimento do mesmo &
        Variável &
        Baixa \\ \hline
        
        6 &
        Adm. do sistema  &
        Ator que tem acesso total à todos os controles do sistema. Esse ator faz parte do núcleo de analista de sistemas e gerencial da empresa que fornece o Software como um Serviço &
        Alta &
        Alta \\ \hline

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
