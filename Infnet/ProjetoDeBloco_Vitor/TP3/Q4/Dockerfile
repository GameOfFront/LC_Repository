# Usa uma imagem oficial do Python como imagem pai
FROM python:3.10-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia o arquivo de requisitos primeiro, para aproveitar o cache das camadas do Docker
COPY requirements.txt ./
# Instala qualquer biblioteca necessária
RUN pip install --no-cache-dir -r requirements.txt

# Copia os scripts para o diretório de trabalho

COPY C.py ./

# Comandos que serão executados quando o contêiner iniciar

CMD ["python", "C.py"]
