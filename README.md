# Docker Compose - Node, MySQL and Nginx

Second exercise from the Docker module on the FullCycle course. Uses docker compose to create a simple node.js app that inserts and reads a record from a MySQL database. Uses nginx as a reverse proxy for interacting with the app.

The exercise instructions are as follows:

---

### Docker compose challenge

In this challenge, we'll use Nginx as a reverse proxy. The main idea is that when a user accesses Nginx, it will make a call to our Node.js application. This application, in turn, will add a record to our MySQL database, registering a name in the "people" table.

The response from the Node.js application to Nginx should be:

```
<h1>Full Cycle Rocks!</h1>
- List of names registered in the database.
```

Generate the docker-compose file in a way that all you need to do is run: `docker-compose up -d` and everything should be up and running, available on port 8080.

The programming language for this challenge is Node/JavaScript.

---

### Some notes on this challenge

For the setup of the database inside the `db` container, we could run the following commands to create the table we're using:

```
wsl2 >> docker exec -it db bash
container >> mysql -uroot -p
mysql >> show databases;
mysql >> use node_db;
mysql >> create table people(id int not null auto_increment, name varchar(255), primary key(id));
mysql >> desc people;
```

Although this solution was taught on the course and videos, I've found that it would not properly match the specifications on the challenge. So, I've found a way to create the table automatically, so the service would be ready to use as soon as the containers are up and running, without the need to manually create the table. This was possible by creating the `init.sql` file inside the `db` container, which is automatically executed by the MySQL service when the container is created.

---

### Signed commit challenge

This repository will also be used for a GitHub section challenge, also from the FullCycle course.

The exercise consists on signing and pushing a commit to this repository using a GPG key. The key used for this challenge is the same one used for signing my last commit on this challenge.
