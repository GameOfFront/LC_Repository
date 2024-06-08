import subprocess
import nmap
import os

os.environ["PATH"] += os.pathsep + "/usr/bin/nmap"

def dnsrecon_collect(domain):
    command = f"dnsrecon -d {domain}"
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stdout

def nmap_scan(target):
    nm = nmap.PortScanner()
    nm.scan(target, arguments='-sV')
    return nm

def process_info(domain):
    print(f"Coletando informações de domínio para {domain}...")
    dns_info = dnsrecon_collect(domain)
    print("Informações de domínio coletadas:")
    print(dns_info)

    print(f"Realizando varredura Nmap no domínio {domain}...")
    nmap_info = nmap_scan(domain)
    print("Informações de serviços coletadas:")
    for host in nmap_info.all_hosts():
        print(f"Host: {host} ({nmap_info[host].hostname()})")
        print(f"State: {nmap_info[host].state()}")
        for proto in nmap_info[host].all_protocols():
            print(f"Protocol: {proto}")
            lport = nmap_info[host][proto].keys()
            for port in lport:
                print(f"Port: {port}\tState: {nmap_info[host][proto][port]['state']}\tService: {nmap_info[host][proto][port]['name']}\tVersion: {nmap_info[host][proto][port]['version']}")

if __name__ == "__main__":
    domain = "example.com"  # Substitua pelo domínio desejado
    process_info(domain)
