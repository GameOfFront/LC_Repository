import networkx as nx
import matplotlib.pyplot as plt
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    priority_queue = [(0, start)]
    shortest_path_tree = {start: None}

    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
                shortest_path_tree[neighbor] = current_node

    return distances, shortest_path_tree

def create_graph():
    graph = {
        'A': {'B': 10, 'C': 5, 'D': 7, 'E': 3, 'F': 2},
        'B': {'A': 10, 'C': 8, 'D': 4, 'E': 6, 'F': 9},
        'C': {'A': 5, 'B': 8, 'D': 1, 'E': 2, 'F': 3},
        'D': {'A': 7, 'B': 4, 'C': 1, 'E': 5, 'F': 6},
        'E': {'A': 3, 'B': 6, 'C': 2, 'D': 5, 'F': 4},
        'F': {'A': 2, 'B': 9, 'C': 3, 'D': 6, 'E': 4}
    }
    return graph

def plot_graph(graph, shortest_path_tree):
    G = nx.Graph()

    for node, edges in graph.items():
        for neighbor, weight in edges.items():
            G.add_edge(node, neighbor, weight=weight)

    pos = nx.spring_layout(G)
    edge_labels = nx.get_edge_attributes(G, 'weight')

    plt.figure(figsize=(10, 8))
    nx.draw(G, pos, with_labels=True, node_size=3000, node_color='skyblue', font_size=20, font_weight='bold', edge_color='black')
    nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_size=15)

    mst_edges = [(v, k) for k, v in shortest_path_tree.items() if v is not None]
    nx.draw_networkx_edges(G, pos, edgelist=mst_edges, edge_color='r', width=2)

    plt.show()

if __name__ == "__main__":
    graph = create_graph()
    distances, shortest_path_tree = dijkstra(graph, 'A')
    print("Distâncias mais curtas a partir de A:", distances)
    print("Árvore de caminhos mais curtos:", shortest_path_tree)
    plot_graph(graph, shortest_path_tree)
