import socket
import threading

def receive_messages(client_socket):
    while True:
        try:
            message = client_socket.recv(1024).decode('utf-8')
            if message:
                if message == "/quit":
                    print("You have been disconnected from the server.")
                    break
                else:
                    print(message)
            else:
                break
        except:
            break

def send_messages(client_socket):
    while True:
        message = input()
        if message.startswith("/newName "):
            client_socket.send(message.encode('utf-8'))
        elif message == "/quit":
            client_socket.send("/quit".encode('utf-8'))
            client_socket.close()
            break
        else:
            client_socket.send(message.encode('utf-8'))

def start_client():
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client_socket.connect(('127.0.0.1', 12346))

    username = input("Enter your username: ")
    client_socket.send(username.encode('utf-8'))

    receive_thread = threading.Thread(target=receive_messages, args=(client_socket,))
    receive_thread.start()

    send_thread = threading.Thread(target=send_messages, args=(client_socket,))
    send_thread.start()

start_client()
