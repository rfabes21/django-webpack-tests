# This really rough at the moment
## You have been warned

### Setup

You will note in docker compose there are 2 characters at play:

- node
- django

You need to be in the node container to run the webpack builds.
You need to be in the python container to run the python app.

#### Python
```
pip install -r requirements/base.txt
./manage.py migrate
./manage.py runserver 0.0.0.0:80
```

#### Node
```
cd demo
npm install && \
./node_modules/.bin/typings install
```

Couple things...
If you would like to install more types for a library you do this:

**Install New Type Defs**
```
./node_modules/.bin/typings install dt~<the type> --save --global
```

`dt~` is the source repo. It's short for DefinitelyTyped:

https://github.com/DefinitelyTyped/DefinitelyTyped

http://definitelytyped.org/



**Run Webpack**

```
./node_modules/.bin/webpack --watch
```


**Run Webpack DevServer**
```
./node_modules/.bin/webpack-dev-server --port 3000 --content-base ./
```
