# Projeto de Controle de Presença via QR Code

Bem-vindo ao nosso projeto de controle de presença via QR Code para escolas e faculdades! Este projeto está focado em modernizar e simplificar o processo de registro de presença dos alunos. Aqui está uma visão detalhada do que estamos construindo:

## Funcionalidades

- **Registro de Presença via QR Code:** Alunos acessarão um link que abrirá a câmera do celular para escanear um QR Code e marcar presença. Esse processo elimina a necessidade de listas de presença em papel, tornando o sistema mais rápido e eficiente.
- **Login Seguro:** Os alunos deverão fazer login utilizando suas credenciais institucionais para garantir a autenticidade do registro.
- **Verificação por Geolocalização:** Para assegurar que o aluno está realmente presente na instituição, a aplicação solicitará acesso à localização do usuário. Usaremos geolocalização para verificar se o registro está sendo feito dentro dos limites da instituição.
- **Backend em TypeScript:** O backend é desenvolvido em TypeScript, garantindo tipagem estática e maior segurança no código. Seguimos o padrão SOLID para criar um código mais limpo, modular e fácil de manter.
- **Frontend em React:** O frontend é desenvolvido em React para proporcionar uma experiência de usuário interativa e dinâmica. A interface será moderna, responsiva e intuitiva.
- **Banco de Dados MySQL:** Utilizamos o MySQL como nosso banco de dados relacional. A biblioteca Knex é usada para construir e gerenciar o banco de dados com migrations, garantindo que as alterações no esquema do banco de dados sejam controladas e rastreáveis.

## Tecnologias Utilizadas

- **TypeScript:** Para o desenvolvimento do backend, garantindo tipagem estática e maior segurança no código.
- **React:** Para o desenvolvimento do frontend, proporcionando uma experiência de usuário interativa e dinâmica.
- **MySQL:** Nosso banco de dados relacional, gerenciado através da biblioteca Knex.
- **Knex:** Utilizado para construir e gerenciar o banco de dados com migrations.
- **Geolocalização:** Para verificar a localização do aluno no momento do registro de presença.

## Início do Projeto

Este projeto está em seus estágios iniciais. Estamos trabalhando arduamente para desenvolver uma solução robusta e confiável para o controle de presença nas instituições de ensino. A primeira etapa envolve a criação e modulação do banco de dados, criação das funcionalidades principais, como o login, a leitura do QR Code, e a verificação por geolocalização.

