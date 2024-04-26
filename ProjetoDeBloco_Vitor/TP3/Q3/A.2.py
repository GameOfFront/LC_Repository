import numpy as np
import concurrent.futures

def monte_carlo_pi_executor(n):
    count = 0
    for _ in range(n):
        x = np.random.rand()
        y = np.random.rand()
        if x**2 + y**2 <= 1:
            count += 1
    return 4 * count / n

n = 1000000
with concurrent.futures.ThreadPoolExecutor() as executor:
    futures = [executor.submit(monte_carlo_pi_executor, n) for _ in range(4)]
    pi_sum = sum(future.result() for future in concurrent.futures.as_completed(futures))
pi_concurrent = pi_sum / 4
print("Estimativa de pi com concurrent.futures:", pi_concurrent)
