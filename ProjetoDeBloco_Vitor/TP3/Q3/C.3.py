from numba import njit, prange
import random
import time

@njit(parallel=True)
def count_inside_points(n):
    inside = 0
    points = []
    for i in prange(n):
        x, y = random.random(), random.random()
        points.append((x, y))
        if x**2 + y**2 <= 1:
            inside += 1
    return inside, points

def estimate_pi_numba_write(n):
    start_time = time.time()
    inside, points = count_inside_points(n)
    pi_estimate = 4 * inside / n
    with open("results_numba.txt", "w") as f:
        for x, y in points:
            f.write(f"{x}, {y}\n")
    print("Estimativa de PI:", pi_estimate)
    print("Tempo de execução:", time.time() - start_time)

n = 1000
estimate_pi_numba_write(n)

