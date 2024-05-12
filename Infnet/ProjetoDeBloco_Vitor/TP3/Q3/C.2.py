import concurrent.futures
import random
import time

def estimate_pi_part_write(n, file_name):
    inside = 0
    with open(file_name, "w") as f:
        for _ in range(n):
            x, y = random.random(), random.random()
            if x**2 + y**2 <= 1:
                inside += 1
            f.write(f"{x}, {y}\n")
    return inside

def estimate_pi_concurrent_write(n, workers=4):
    part_count = n // workers
    file_names = [f"results_{i}.txt" for i in range(workers)]
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        futures = [executor.submit(estimate_pi_part_write, part_count, file_names[i]) for i in range(workers)]
        results = [f.result() for f in futures]
    return 4 * sum(results) / n

n = 1000000
start_time = time.time()
pi_estimate = estimate_pi_concurrent_write(n)
print("Estimativa de PI:", pi_estimate)
print("Tempo de execução:", time.time() - start_time)

