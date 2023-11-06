# leti-web-hack

Проект интернет магазина, разработан в рамках хакатона по веб-разработке.

## Как задеплоить приложение

На машине должны быть установлены node.js и docker,
для сборки из контейнера.

```bash
docker compose up [-d]
```

> Подключение к контейнеру с БД Postgres `docker exec -it <container_id> bash`

Логи:

```bash
docker compose logs --follow [service]
```

Остановка приложения:

```bash
docker compose down
```

Документация API:

- Swagger: [`http://localhost:8080/swagger-ui/index.html`](http://localhost:8097/swagger-ui/index.html)

## Резервная сборка

В случае если у вас нет возможности собрать проект в докере и есть node, предлагается следующее:

Из корня репозитория:

```
cd client
npm install
```

Далее также из корня

```
cd js-server
npm install
```

Далее из корня:

```
npm run start

```
