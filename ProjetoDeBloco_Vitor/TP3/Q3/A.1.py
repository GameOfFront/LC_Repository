import numpy as np
import numba

@numba.njit(parallel=True)
def monte_carlo_pi_numba(n):
    count = 0
    for _ in numba.prange(n):
        x = np.random.rand()
        y = np.random.rand()
        if x**2 + y**2 <= 1:
            count += 1
    return 4 * count / n

n = 1000000
pi_numba = monte_carlo_pi_numba(n)
print("Estimativa de pi com Numba:", pi_numba)
