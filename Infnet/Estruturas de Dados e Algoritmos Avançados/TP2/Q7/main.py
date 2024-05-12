class Grafo:
    def __init__(self, vertices):
        self.vertices = vertices
        self.adjacencia = [[0] * len(vertices) for _ in range(len(vertices))]
        self.vertice_index = {key: index for index, key in enumerate(vertices)}

    def adiciona_aresta(self, u, v):
        i = self.vertice_index[u]
        j = self.vertice_index[v]
        self.adjacencia[i][j] = 1
        self.adjacencia[j][i] = 1

    def imprime_pares_unicos(self):
        visitados = set()
        for i, u in enumerate(self.vertices):
            for j, v in enumerate(self.vertices):
                if self.adjacencia[i][j] and (v, u) not in visitados:
                    print(f"({u}, {v})")
                    visitados.add((u, v))


produtos = [
    "escova", "esmalte", "sombra", "óculos", "pregos",
    "broca", "martelo", "serra", "agulhas", "alfinetes",
    "faca", "garfo", "colher"
]


grafo = Grafo(produtos)


arestas = [
    ("escova", "esmalte"), ("esmalte", "sombra"), ("sombra", "óculos"),
    ("pregos", "broca"), ("pregos", "martelo"), ("pregos", "serra"),
    ("pregos", "agulhas"), ("pregos", "alfinetes"), ("serra", "faca"),
    ("faca", "garfo"), ("faca", "colher")
]

for u, v in arestas:
    grafo.adiciona_aresta(u, v)


grafo.imprime_pares_unicos()
