# This really rough at the moment
## You have been warned

### Setup

You will note in docker compose there are 2 characters at play:

- node
- django

You need to be in the node container to run the webpack builds.
You need to be in the python container to run the python app.

**Start Everything Up**

```
# from the root
docker-compose --file django/docker-compose.yml up -d
```

This is currently set to take advantage of the native volume mapping in Docker
for Mac beta. If you are not running Docker for Mac Beta you will have issues
and need to do the volume sharing another way.

**A unison enabled yaml file has been added:**
> Note this requires Docker Toolbox which may not be compatible with Docker Beta

```
# from the root
docker-compose --file django/django-docker-unison.yml up -d
```

**Sublime Plugin For TypeScript**

Available in the package manager:

https://github.com/Microsoft/TypeScript-Sublime-Plugin

#### Python
```
# from project root
docker exec -it django_django_1 /bin/bash;
cd django

pip install -r requirements/base.txt
./manage.py migrate
./manage.py runserver 0.0.0.0:80
```
> pdbpp install may fail, if so just run `pip install...` again
> You can install pdbpp with easy install `easy_install pdbpp`

**Settings**

`config/settings/[base|local|prod].py`


**How to use your compiled javascript in Django Templates**

```
{% load render_bundle from webpack_loader %}
{% render_bundle 'js/common' %}
```

This is the package it's using:

https://github.com/owais/django-webpack-loader

You will note the name here, `js/common` lines up with what you see in:
`demo/@static/webpack.config.js` under the `entry` configuration. 

Speaking of `entry`ies, if you add a new page with custom JS you **MUST**
add it as an `entry` or you will get nothing.

#### Node
```
cd demo/\@static
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


**Webpack Configuration**

```
demo/@static/webpack.config.json
```

**Run Webpack**

```
./node_modules/.bin/webpack --watch
```


**Run Webpack DevServer**
```
./node_modules/.bin/webpack-dev-server --port 3000 --content-base ./
```

You do **NOT** need to run the dev server. It's mentioned here for potential use later.
