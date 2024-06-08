import socket
import ssl

server_address = ('localhost', 12345)

context = ssl.create_default_context(ssl.Purpose.SERVER_AUTH)
context.load_verify_locations('server.crt')

def start_client():
    raw_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    conn = context.wrap_socket(raw_socket, server_hostname='localhost')
    conn.connect(server_address)

    try:
        while True:
            message = input("Digite a mensagem: ")
            conn.sendall(message.encode('utf-8'))
            response = conn.recv(1024).decode('utf-8')
            print(f"Resposta do servidor: {response}")
    except Exception as e:
        print(f"Erro: {e}")
    finally:
        conn.close()

start_client()
