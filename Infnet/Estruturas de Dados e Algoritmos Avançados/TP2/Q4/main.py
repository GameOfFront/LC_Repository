from trie import Trie

t = Trie()

with open("palavras") as palavras:
    for palavra in palavras:
        palavra = palavra.rstrip()
        if palavra and not palavra.startswith("#"):
            palavra = palavra.split()
            t.insere({"palavra": palavra[0],
                      "freq": int(palavra[1])})

print(t)

while True:
    prefixo = input("Prefixo: ")
    if not prefixo:
        break
    if t.busca(prefixo, prefixo=False):
        print(f'A palavra "{prefixo}" está correta.')
    else:
        sugestoes = t.autocorrigir(prefixo)
        print(f'Palavras sugeridas para "{prefixo}": {sugestoes}')
