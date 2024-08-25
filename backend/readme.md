# instruções backend

tutprial inicial

https://www.django-rest-framework.org/tutorial/quickstart/

'''

    # Create the project directory

    mkdir casamento
    cd casamento

    # Create a virtual environment to isolate our package dependencies locally

    python3 -m venv env
    source env/bin/activate # On Windows use `env\Scripts\activate`

    # Install Django and Django REST framework into the virtual environment

    pip install djangorestframework

    # Set up a new project with a single application

    django-admin startproject casamento . # Note the trailing '.' character
    cd casamento
    django-admin startapp app
    cd ..

'''
