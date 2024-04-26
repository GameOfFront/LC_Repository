import numpy as np

def monte_carlo_pi(n):
    count = 0
    for _ in range(n):
        x = np.random.rand()
        y = np.random.rand()
        if x**2 + y**2 <= 1:
            count += 1
    return 4 * count / n

n = 1000000
pi_normal = monte_carlo_pi(n)
print("Estimativa de pi sem otimização:", pi_normal)
