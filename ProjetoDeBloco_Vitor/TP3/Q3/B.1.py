import numpy as np
import numba
import time

@numba.njit(parallel=True)
def monte_carlo_pi_numba(n):
    count = 0
    for _ in numba.prange(n):
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
tempos_execucao_numba = []

for i in range(6):
    print(f"Execução {i+1}:")
    _, tempo = medir_tempo(monte_carlo_pi_numba, n)
    tempos_execucao_numba.append(tempo)
    print(f"Tempo de execução: {tempo} segundos\n")

media_tempo_execucao_numba = sum(tempos_execucao_numba) / len(tempos_execucao_numba)
print("Média dos tempos de execução com Numba:", media_tempo_execucao_numba, "segundos")
