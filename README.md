# Rest API nodejs

Rest API escrita em Typescript para rodar em node.js.

## Pré-requisitos

Para executar a aplicação, será necessário ter Docker para build, execução e uso.

* **Docker**

    O Docker é responsável por construir e executar a aplicação, em ambiente separado do seu sistema operacional, portanto, não será necessário instalar a app diretamente, apenas executá-la.

    Senão tem instalado, siga esse tutorial [aqui](https://docs.docker.com/desktop/), clique no link do seu sistema operacional e siga as instruções.


## Executar

Com o Docker instalado, vamos ao que interessa, executar a aplicação:

1. Na pasta raiz do projeto, execute:
    ```bash
    docker compose up -d --build
    ```

2. Vá até https://localhost:5000/api-docs se o build deu certo, deve aparecer a página inicial do Swagger.

## Testar

Basta acionar cada requisição do [Swagger](https://localhost:5000/api-docs), para ver o código os resultados.

## Desligar a app

Para desligar a app, basta executar na pasta raiz:
```bash
docker compose down
```