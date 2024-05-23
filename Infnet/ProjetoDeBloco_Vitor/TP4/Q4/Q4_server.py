import socket
import threading

clients = {}
client_names = {}

def broadcast(message, client_socket=None):
    for client in clients.values():
        if client != client_socket:
            try:
                client.send(message)
            except:
                client.close()
                remove_client(client)

def handle_client(client_socket, client_address):
    client_name = client_socket.recv(1024).decode('utf-8')
    clients[client_address] = client_socket
    client_names[client_address] = client_name
    broadcast(f"{client_name} has joined the chat!".encode('utf-8'), client_socket)
    print(f"{client_name} ({client_address}) has connected.")

    while True:
        try:
            message = client_socket.recv(1024)
            if message:
                message_decoded = message.decode('utf-8')
                if message_decoded == "/quit":
                    client_socket.send("/quit".encode('utf-8'))
                    client_socket.close()
                    broadcast(f"{client_name} has left the chat.".encode('utf-8'), client_socket)
                    remove_client(client_socket)
                    break
                elif message_decoded.startswith("/newName "):
                    new_name = message_decoded.split(" ", 1)[1]
                    broadcast(f"{client_name} changed their name to {new_name}".encode('utf-8'), client_socket)
                    client_names[client_address] = new_name
                    client_name = new_name
                else:
                    broadcast(f"{client_name}: {message_decoded}".encode('utf-8'), client_socket)
            else:
                broadcast(f"{client_name} has disconnected.".encode('utf-8'), client_socket)
                client_socket.close()
                remove_client(client_socket)
                break
        except:
            broadcast(f"{client_name} has disconnected.".encode('utf-8'), client_socket)
            client_socket.close()
            remove_client(client_socket)
            break

def remove_client(client_socket):
    for address, socket in clients.items():
        if socket == client_socket:
            del clients[address]
            del client_names[address]
            break

def start_server():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(('0.0.0.0', 12346))
    server.listen(5)
    print("Servidor de chat iniciado...")

    while True:
        client_socket, client_address = server.accept()
        client_handler = threading.Thread(target=handle_client, args=(client_socket, client_address))
        client_handler.start()

start_server()
