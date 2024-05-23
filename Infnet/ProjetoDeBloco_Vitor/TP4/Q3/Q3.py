class Graph:
    def __init__(self):
        self.vertices = {}

    def add_vertex(self, vertex):
        if vertex not in self.vertices:
            self.vertices[vertex] = {}

    def add_edge(self, start, end, weight):
        if start in self.vertices and end in self.vertices:
            self.vertices[start][end] = weight
            self.vertices[end][start] = weight

    def dfs(self, start, end):
        def dfs_recursive(current, end, path, visited):
            path.append(current)
            visited.add(current)
            if current == end:
                paths.append(list(path))
            else:
                for neighbor in self.vertices[current]:
                    if neighbor not in visited:
                        dfs_recursive(neighbor, end, path, visited)
            path.pop()
            visited.remove(current)

        paths = []
        dfs_recursive(start, end, [], set())
        return paths

    def bfs(self, start, end):
        from collections import deque

        queue = deque([[start]])
        visited = set()

        while queue:
            path = queue.popleft()
            current = path[-1]
            if current == end:
                return path
            if current not in visited:
                visited.add(current)
                for neighbor in self.vertices[current]:
                    new_path = list(path)
                    new_path.append(neighbor)
                    queue.append(new_path)
        return None


graph = Graph()
graph.add_vertex('A')
graph.add_vertex('B')
graph.add_vertex('C')
graph.add_vertex('D')
graph.add_vertex('E')

graph.add_edge('A', 'B', 1)
graph.add_edge('A', 'C', 2)
graph.add_edge('B', 'D', 3)
graph.add_edge('C', 'D', 4)
graph.add_edge('C', 'E', 5)
graph.add_edge('D', 'E', 6)


print("Todos os caminhos de A para D (DFS):", graph.dfs('A', 'D'))
print("Caminho mais curto de A para E (BFS):", graph.bfs('A', 'E'))
