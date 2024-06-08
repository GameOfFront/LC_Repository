import sys

sys.path.append('/home/luiz/.local/lib/python3.10/site-packages')

import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

dist_matrix = np.array([
    [0, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    [20, 0, 40, 50, 60, 70, 80, 90, 100, 110],
    [30, 40, 0, 60, 70, 80, 90, 100, 110, 120],
    [40, 50, 60, 0, 80, 90, 100, 110, 120, 130],
    [50, 60, 70, 80, 0, 100, 110, 120, 130, 140],
    [60, 70, 80, 90, 100, 0, 120, 130, 140, 150],
    [70, 80, 90, 100, 110, 120, 0, 140, 150, 160],
    [80, 90, 100, 110, 120, 130, 140, 0, 160, 170],
    [90, 100, 110, 120, 130, 140, 150, 160, 0, 180],
    [100, 110, 120, 130, 140, 150, 160, 170, 180, 0]
])

def nearest_neighbor(dist_matrix, start=0):
    n = len(dist_matrix)
    visited = [False] * n
    path = [start]
    visited[start] = True
    total_distance = 0

    current_city = start
    for _ in range(n - 1):
        next_city = -1
        min_dist = float('inf')
        for j in range(n):
            if not visited[j] and 0 < dist_matrix[current_city][j] < min_dist:
                min_dist = dist_matrix[current_city][j]
                next_city = j
        visited[next_city] = True
        path.append(next_city)
        total_distance += min_dist
        current_city = next_city

    total_distance += dist_matrix[current_city][start]
    path.append(start)

    return path, total_distance

path, total_distance = nearest_neighbor(dist_matrix)

print("Caminho:", path)
print("Distância total:", total_distance)

def plot_path(path):
    G = nx.DiGraph()
    labels = {i: chr(65 + i) for i in range(len(path) - 1)}  # Nomeando as cidades como A, B, C, etc.
    edges = [(path[i], path[i + 1]) for i in range(len(path) - 1)]

    for edge in edges:
        G.add_edge(edge[0], edge[1], weight=dist_matrix[edge[0]][edge[1]])

    pos = nx.spring_layout(G)
    nx.draw(G, pos, with_labels=True, labels=labels, node_size=700, node_color='lightblue', font_size=10)
    edge_labels = nx.get_edge_attributes(G, 'weight')
    nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels)
    plt.show()

plot_path(path)

