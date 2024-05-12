import random
import time
import numba

def monte_carlo_pi(n):
    count_inside = 0
    for _ in range(n):
        x = random.uniform(0, 1)
        y = random.uniform(0, 1)
        if x*2 + y*2 <= 1:
            count_inside += 1
    return 4 * count_inside / n

@numba.jit
def monte_carlo_pi_numba(n):
    count_inside = 0
    for _ in range(n):
        x = random.uniform(0, 1)
        y = random.uniform(0, 1)
        if x*2 + y*2 <= 1:
            count_inside += 1
    return 4 * count_inside / n

n = 10000000
num_execucoes = 6

tempos_sem_otimizacao = []
for _ in range(num_execucoes):
    start_time = time.time()
    pi = monte_carlo_pi(n)
    end_time = time.time()
    tempos_sem_otimizacao.append(end_time - start_time)

tempos_com_otimizacao = []
for _ in range(num_execucoes):
    start_time = time.time()
    pi_numba = monte_carlo_pi_numba(n)
    end_time = time.time()
    tempos_com_otimizacao.append(end_time - start_time)

print("Tabela de Tempos de Execução:")
print("------------------------------------")
print("Execução | Sem Otimização | Com Otimização Numba")
print("------------------------------------")
for i in range(num_execucoes):
    print(f"   {i+1}      |     {tempos_sem_otimizacao[i]} s       |       {tempos_com_otimizacao[i]} s")
