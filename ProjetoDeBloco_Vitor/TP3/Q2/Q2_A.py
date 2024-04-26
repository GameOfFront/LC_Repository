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

start_time = time.time()
pi = monte_carlo_pi(n)
end_time = time.time()
print(f"Tempo de execução sem otimização: {end_time - start_time} segundos")
print(f"Estimativa de π sem otimização: {pi}")

start_time = time.time()
pi_numba = monte_carlo_pi_numba(n)
end_time = time.time()
print(f"Tempo de execução com otimização Numba: {end_time - start_time} segundos")
print(f"Estimativa de π com otimização Numba: {pi_numba}")
