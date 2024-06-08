from scapy.all import sniff, IP, TCP

def packet_callback(packet):
    if IP in packet and TCP in packet:
        ip_src = packet[IP].src
        ip_dst = packet[IP].dst
        tcp_sport = packet[TCP].sport
        tcp_dport = packet[TCP].dport
        print(f"[+] Pacote TCP capturado: {ip_src}:{tcp_sport} -> {ip_dst}:{tcp_dport}")

def start_sniffing(interface, count):
    print(f"[*] Capturando {count} pacotes na interface {interface}...")
    sniff(filter="tcp", iface=interface, prn=packet_callback, store=0, count=count)

if __name__ == "__main__":
    interface = "enp0s3"
    packet_count = 10
    start_sniffing(interface, packet_count)

