import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email_via_smtplib(recipient_email, subject, message):
    sender_email = "your_email@gmail.com"
    password = "your_app_password"

    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = subject

    msg.attach(MIMEText(message, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, recipient_email, msg.as_string())
        server.quit()
        print("E-mail enviado com sucesso!")
    except Exception as e:
        print(f"Ocorreu um erro: {e}")

def main():
    recipient_email = input("Digite o endereço de e-mail do destinatário: ")
    subject = input("Digite o título do e-mail: ")
    message = input("Digite o conteúdo da mensagem: ")

    send_email_via_smtplib(recipient_email, subject, message)

if __name__ == "__main__":
    main()
