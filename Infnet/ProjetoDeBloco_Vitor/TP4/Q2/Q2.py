class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
        self.word_count = 0

    def insert(self, word):
        current_node = self.root
        for char in word:
            if char not in current_node.children:
                current_node.children[char] = TrieNode()
            current_node = current_node.children[char]
        if not current_node.is_end_of_word:
            current_node.is_end_of_word = True
            self.word_count += 1

    def search_prefix(self, prefix):
        current_node = self.root
        for char in prefix:
            if char not in current_node.children:
                return []
            current_node = current_node.children[char]
        return self._dfs(current_node, prefix)

    def _dfs(self, node, prefix):
        words = []
        if node.is_end_of_word:
            words.append(prefix)
        for char, child_node in node.children.items():
            words.extend(self._dfs(child_node, prefix + char))
        return words

    def count_words(self):
        return self.word_count

def load_words_from_file(filename):
    with open(filename, 'r') as f:
        words = [line.strip() for line in f.readlines()]
    return words


trie = Trie()
words = load_words_from_file('words.txt')
for word in words:
    trie.insert(word)


print("Número total de palavras na Trie:", trie.count_words())

prefixo = "app"
print("Palavras que começam com o prefixo '{}':".format(prefixo), trie.search_prefix(prefixo))
