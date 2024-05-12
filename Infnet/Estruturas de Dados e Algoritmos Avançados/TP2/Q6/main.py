class Grafo:
    def __init__(self):
        self.adjacencias = {}

    def adiciona_aresta(self, u, v):
        if u not in self.adjacencias:
            self.adjacencias[u] = []
        if v not in self.adjacencias:
            self.adjacencias[v] = []
        self.adjacencias[u].append(v)
        self.adjacencias[v].append(u)

    def imprime_pares_unicos(self):
        visitados = set()
        for u in self.adjacencias:
            for v in self.adjacencias[u]:
                if (v, u) not in visitados:
                    print(f"({u}, {v})")
                    visitados.add((u, v))


grafo = Grafo()


arestas = [
    ("escova", "esmalte"), ("esmalte", "sombra"), ("sombra", "óculos"),
    ("pregos", "broca"), ("pregos", "martelo"), ("pregos", "serra"),
    ("pregos", "agulhas"), ("pregos", "alfinetes"), ("serra", "faca"),
    ("faca", "garfo"), ("faca", "colher")
]

for u, v in arestas:
    grafo.adiciona_aresta(u, v)

# Imprimir todos os pares de produtos relacionados
grafo.imprime_pares_unicos()
