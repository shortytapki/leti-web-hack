# leti-web-hack
LETI web-hackathon project.
## How to deploy backend application

Start `docker-compose.yml`:

```bash
docker compose up [-d]
```

> Connection to running postgres container could be done with `docker exec -it <container_id> bash`

Watch logs:

```bash
docker compose logs --follow [service]
```

Stop everything:

```bash
docker compose down
```

Check:

* Swagger: [`http://localhost:8080/swagger-ui/index.html`](http://localhost:8097/swagger-ui/index.html)
