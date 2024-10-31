# Rest API nodejs

Rest API escrita em Typescript para rodar em node.js.

## Pré-requisitos
Para executar a aplicação, será necessário alguns softwares, para build, execução e uso.

* **Docker**

    O Docker é responsável por construir e executar a aplicação, em ambiente separado do seu sistema operacional, portanto, não será necessário instalar a app diretamente, apenas executá-la.

    Senão tem instalado, siga esse tutorial [aqui](https://docs.docker.com/desktop/), clique no link do seu sistema operacional e siga as instruções.

* **Postman**

    O Postman é uma serviço de teste e execução de APIs HTTP, você cria uma coleção ou importa, através de arquivos JSON. Cria requisições HTTP, e acessa os endpoints das aplicações. Apesar de poder acessar os endpoints GET no navegador, o indicado é que use o Postman para testar tudo, os métodos DELETE e PUT, por exemplo.

    Senão tem instalado, siga esse tutorial [aqui](https://www.postman.com/downloads/), clique no link do seu sistema operacional e siga as instruções.


## Executar
Com as ferramentas necessárias, vamos ao que interessa, executar a aplicação.

1. Na pasta raiz do projeto, execute:
    ```bash
    docker compose up -d
    ```

2. Vá a https://localhost:5000/ se o build deu certo, deve aparecer a mensagem: 
    ```json
    { ok: "server up and running! }
    ```

3. Se tudo funcionou prepare o postman, para testar os endpoints.

## Testar

Baixe a coleção do meu projeto [aqui](./assets/User%20API.postman_collection.json). Importe-o no seu Postman e execute as requisições previamente criadas.

As requisições que precisam de corpo JSON, já estão configuradas, basta clicar no botão **Enviar** em cada requisição e tudo deve funcionar.