import numpy as np
import concurrent.futures
import time

def monte_carlo_pi_executor(n):
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
tempos_execucao_concurrent = []

for i in range(6):
    print(f"Execução {i+1}:")
    with concurrent.futures.ThreadPoolExecutor() as executor:
        futures = [executor.submit(monte_carlo_pi_executor, n) for _ in range(4)]
        pi_sum = sum(future.result() for future in concurrent.futures.as_completed(futures))
    pi_concurrent = pi_sum / 4
    tempos_execucao_concurrent.append(pi_concurrent)
    print(f"Tempo de execução: {tempos_execucao_concurrent[-1]} segundos\n")

media_tempo_execucao_concurrent = sum(tempos_execucao_concurrent) / len(tempos_execucao_concurrent)
print("Média dos tempos de execução com concurrent.futures:", media_tempo_execucao_concurrent, "segundos")
