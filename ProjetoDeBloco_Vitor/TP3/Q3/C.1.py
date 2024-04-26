import random
import time

def estimate_pi_write(n):
    inside = 0
    with open("results.txt", "w") as f:
        for _ in range(n):
            x, y = random.random(), random.random()
            if x**2 + y**2 <= 1:
                inside += 1
            f.write(f"{x}, {y}\n")
    return 4 * inside / n

n = 1000000
start_time = time.time()
pi_estimate = estimate_pi_write(n)
print("Estimativa de PI:", pi_estimate)
print("Tempo de execução:", time.time() - start_time)

