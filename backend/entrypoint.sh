# backend/entrypoint.sh
#!/bin/sh

# python
# Cria o ambiente virtual
# python3 -m venv env

# printf "Ambiente virtual criado\n"

# Ativa o ambiente virtual
# . /env/bin/activate

pip install djangorestframework
# entra na pasta appCasamento
cd appCasamento

# Inicia o servidor de desenvolvimento Django
python manage.py runserver 0.0.0.0:8000