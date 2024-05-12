class Trie(object):
    """Implementa uma trie"""

    class No(object):
        """Implementa um nó de trie"""
        def __init__(self):
            self.filhos = {}

    def __init__(self):
        self.__raiz = self.No()

    def __repr(self, no, chave="○", tipo="", indent="", ord=-1):
        """Produz representação de subárvore como str"""
        s = ""
        indent += "\t"
        filhos = [(ch, filho) for ch, filho in
                  no.filhos.items() if ch != "*"]
        if ord or len(indent) == 2:
            s += indent[2:] + tipo + " " * (no != self.__raiz)
        else:
            s += " →\t"
        s += chave + '*' * ('*' in no.filhos)
        if no == self.__raiz or len(filhos) == 0:
            s += "\n"
        for i, (ch, filho) in enumerate(filhos):
            if i < len(filhos) - 1:
                s += self.__repr(filho, ch, "├→",
                                 indent + "│" * (tipo == "├→"), i)
            else:
                s += self.__repr(filho, ch, "└→",
                                 indent + "│" * (tipo == "├→"), i)
        return s

    def __str__(self):
        return self.__repr(self.__raiz)

    def __busca(self, string):
        """Retorna nó onde a string buscada é formada"""
        no_atual = self.__raiz
        for c in string:
            no_atual = no_atual.filhos.get(c)
            if not no_atual:
                return None
        return no_atual

    def busca(self, string, prefixo=True):
        """
        Verifica se a string está na trie.
        prefixo=True (padrão): busca por prefixo.
        prefixo=False: busca por palavra completa.
        Retorna bool.
        """
        no = self.__busca(string)
        return bool(no) and (prefixo or ("*" in no.filhos))

    def insere(self, string):
        """Insere string na trie"""
        no_atual = self.__raiz
        for c in string:
            if c not in no_atual.filhos:
                no_atual.filhos[c] = self.No()
            no_atual = no_atual.filhos[c]
        no_atual.filhos["*"] = None

    def __recupera_palavras(self, no=None, prefixo="", palavras=None):
        """Recupera todas as palavras a partir de um nó"""
        if not no:
            no = self.__raiz
        if palavras is None:
            palavras = []
        for chave, filho in no.filhos.items():
            if chave == "*":
                palavras.append(prefixo)
            else:
                self.__recupera_palavras(filho, prefixo + chave, palavras)
        return palavras

    def autocompletar(self, prefixo):
        """Retorna lista de palavras por prefixo"""
        no = self.__busca(prefixo)
        if not no:
            return []
        return self.__recupera_palavras(no, prefixo)

    def imprime_chaves(self, no=None, prefixo=""):
        """Imprime todas as chaves da trie, incluindo '*'"""
        if no is None:
            no = self.__raiz
        for chave, filho in no.filhos.items():
            print(prefixo + chave)
            if filho:
                self.imprime_chaves(filho, prefixo + chave)

trie = Trie()
palavras = ["casa", "carro", "cachorro"]
for palavra in palavras:
    trie.insere(palavra)

trie.imprime_chaves()
