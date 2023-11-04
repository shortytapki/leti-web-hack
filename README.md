# leti-web-hack
LETI web-hackathon project.
## How to deploy backend application

Start `docker-compose.yml`:

```bash
docker compose up [-d]
```

> Connection to running postgres container could be done with `docker exec -it <container_id> bash`

In case of error `database "letistore" does not exist` enter in the postgres console:

```bash
CREATE DATABASE letistore;
```
