# Usa uma imagem oficial do Python como imagem pai
FROM python:3.10-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia o arquivo de requisitos primeiro, para aproveitar o cache das camadas do Docker
COPY requirements.txt ./
# Instala qualquer biblioteca necessária
RUN pip install --no-cache-dir -r requirements.txt

# Copia os scripts para o diretório de trabalho
COPY A.1.py ./
COPY A.2.py ./
COPY A.3.py ./
COPY B.1.py ./
COPY B.2.py ./
COPY B.3.py ./
COPY C.1.py ./
COPY C.2.py ./
COPY C.3.py ./


# Comandos que serão executados quando o contêiner iniciar
CMD ["python", "A.1.py"]
CMD ["python", "A.2.py"]
CMD ["python", "A.3.py"]
CMD ["python", "B.1.py"]
CMD ["python", "B.2.py"]
CMD ["python", "B.3.py"]
CMD ["python", "C.1.py"]
CMD ["python", "C.2.py"]
CMD ["python", "C.3.py"]
