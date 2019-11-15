# solax
your casual minecraft bot that messes up the server

# usage
## example usage
```console
$ node solax.js --ip=localhost --port=25565 --username=solax --password=mypassword --version==1.8
```
## arguments
- ip:
    - description: the ip of the server
    - optional: false
    - default value: localhost
- port:
    - description: the port of the server
    - optional: false
    - default value: 25565
- username:
    - description: the username of the bot
    - optional: false
    - default value: solax
- password:
    - description: the password of the minecraft account, not needed if logging in from a non-existing account
    - optional: true
- version:
    - description: the version of the server
    - optional: false