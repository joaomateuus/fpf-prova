
# Como executar 

````
# Clone este repositório
$ git clone <https://github.com/joaomateuus/fpf-prova/tree/main/backend>

# Acesse a pasta do projeto no terminal/cmd
$ cd Projeto

# Instale o virtualenv
$ pip install virtualenv 

# Crie um ambiente virtual
$ virtualenv venv (windows)

# Acesse o ambiente virtual
$ venv/Scripts/activate (windows)

#  Instale as bibliotecas necessarias 
$ pip install -r requirements.txt

# Execute a aplicação no terminal
$ python manage.py runserver

# O servidor inciará na porta:8000 - acesse <http://localhost:8000/api/v1/>
