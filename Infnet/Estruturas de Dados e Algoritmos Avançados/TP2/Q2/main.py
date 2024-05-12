from trie import Trie

t = Trie()

with open("palavras") as palavras:
  for palavra in palavras:
    palavra = palavra.rstrip()
    if palavra and not palavra.startswith("#"):
      t.insere(palavra)


prefixo = input("Prefixo: ")
while prefixo:
  print(f'Palavras começando com "{prefixo}":',
        t.autocompletar(prefixo))
  prefixo = input("\nPrefixo: ")