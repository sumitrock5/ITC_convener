# ITC_convener

clone the project:

$ git clone https://github.com/erinallard/instagram_miner.git 

//Backend part-folder task 1
(Note:I used a postgresql database)
steps to run backend:


create and start a a virtual environment:

$virtualenv env --no-site-packages
$source env/bin/activate

Install the project dependencies:

$pip install -r requirements.txt

create a file named "secrets.sh":

$touch secrets.sh (mac and linux)

obtain a secret from MiniWebTool key and add to secrets.sh:

$export SECRET_KEY='<secret_key>'
$add secrets.sh to .gitignore file

create a postgres db and add the credentials to settings.py:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'db_name',
        'USER': 'name',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '',
    }
}

then run:

$python manage.py migrate

create admin account:

$python manage.py createsuperuser

then:

$python manage.py makemigrations polls

to makemigrations for the app

then again run:

$python manage.py migrate

to start the development server:

$python manage.py runserver

and open localhost:8000 on your browser to view the app.



//for the frontend which is in folder-task 2

run:

$ npm install

then:

$ npm start



//There are also some pictures which are included alongwith the components which are displayed as team pics.

