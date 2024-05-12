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

    def conta_arestas(self):
        count = 0
        visitados = set()
        for u in self.adjacencias:
            for v in self.adjacencias[u]:
                if (v, u) not in visitados:
                    count += 1
                    visitados.add((u, v))
                    visitados.add((v, u))
        return count

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


grafo.imprime_pares_unicos()


total_arestas = grafo.conta_arestas()
print(f"Total de arestas no grafo: {total_arestas}")
