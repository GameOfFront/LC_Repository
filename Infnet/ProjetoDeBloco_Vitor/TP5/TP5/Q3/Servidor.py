import socket
import ssl
import threading

server_address = ('localhost', 12345)

context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
context.load_cert_chain(certfile="server.crt", keyfile="server.key")

def handle_client(conn, addr):
    print(f"Conexão estabelecida com {addr}")
    while True:
        try:
            message = conn.recv(1024).decode('utf-8')
            if not message:
                break
            print(f"Mensagem recebida de {addr}: {message}")

            conn.sendall(message.encode('utf-8'))
        except Exception as e:
            print(f"Erro: {e}")
            break
    conn.close()

def start_server():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind(server_address)
    server_socket.listen(5)
    print("Servidor iniciado e aguardando conexões...")

    while True:
        client_socket, addr = server_socket.accept()
        conn = context.wrap_socket(client_socket, server_side=True)
        threading.Thread(target=handle_client, args=(conn, addr)).start()

start_server()
