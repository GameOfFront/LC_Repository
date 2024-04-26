import numpy as np
import time

def monte_carlo_pi(n):
    count = 0
    for _ in range(n):
        x = np.random.rand()
        y = np.random.rand()
        if x**2 + y**2 <= 1:
            count += 1
    return 4 * count / n

def medir_tempo(func, *args):
    inicio = time.time()
    resultado = func(*args)
    fim = time.time()
    tempo_execucao = fim - inicio
    return resultado, tempo_execucao

n = 1000000
tempos_execucao_normal = []

for i in range(6):
    print(f"Execução {i+1}:")
    _, tempo = medir_tempo(monte_carlo_pi, n)
    tempos_execucao_normal.append(tempo)
    print(f"Tempo de execução: {tempos_execucao_normal[-1]} segundos\n")

media_tempo_execucao_normal = sum(tempos_execucao_normal) / len(tempos_execucao_normal)
print("Média dos tempos de execução sem otimização:", media_tempo_execucao_normal, "segundos")
