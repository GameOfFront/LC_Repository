import os
import sys

sys.path.append('/home/luiz/.local/lib/python3.10/site-packages')

import networkx as nx
import matplotlib.pyplot as plt
import numpy as np

dist_matrix = np.array([
    [0, 10, 5, 7, 3, 2],
    [10, 0, 8, 4, 6, 9],
    [5, 8, 0, 1, 2, 3],
    [7, 4, 1, 0, 5, 6],
    [3, 6, 2, 5, 0, 4],
    [2, 9, 3, 6, 4, 0]
])

def prim(graph):
    n = len(graph)
    selected = [False] * n
    selected[0] = True
    mst_edges = []

    for _ in range(n - 1):
        min_weight = float('inf')
        u = -1
        v = -1
        for i in range(n):
            if selected[i]:
                for j in range(n):
                    if not selected[j] and graph[i][j]:
                        if min_weight > graph[i][j]:
                            min_weight = graph[i][j]
                            u = i
                            v = j
        mst_edges.append((u, v, min_weight))
        selected[v] = True

    return mst_edges

def build_mst(edges):
    mst = nx.Graph()
    for u, v, weight in edges:
        mst.add_edge(u, v, weight=weight)
    return mst

def plot_graph(graph):
    pos = nx.spring_layout(graph)
    nx.draw(graph, pos, with_labels=True, node_color='lightblue', node_size=700, font_size=10)
    labels = nx.get_edge_attributes(graph, 'weight')
    nx.draw_networkx_edge_labels(graph, pos, edge_labels=labels)
    plt.show()

mst_edges = prim(dist_matrix)
mst = build_mst(mst_edges)
plot_graph(mst)

