from numba import jit
import numpy as np

class Node:
    def __init__(self):
        self.children = {}
        self.is_end_of_prefix = False

    def get_child(self, bit):
        return self.children.get(bit, None)

    def add_child(self, bit):
        if bit not in self.children:
            self.children[bit] = Node()

class PrefixTree:
    def __init__(self):
        self.root = Node()

    def insert(self, prefix):
        current_node = self.root
        for bit in prefix:
            bit = int(bit)
            if current_node.get_child(bit) is None:
                current_node.add_child(bit)
            current_node = current_node.get_child(bit)
        current_node.is_end_of_prefix = True

    def search(self, address):
        current_node = self.root
        longest_prefix = None
        current_prefix = ""
        for bit in address:
            bit = int(bit)
            if current_node.get_child(bit) is not None:
                current_node = current_node.get_child(bit)
                current_prefix += str(bit)
                if current_node.is_end_of_prefix:
                    longest_prefix = current_prefix
            else:
                break
        return longest_prefix

def main():
    trie = PrefixTree()
    prefixes = ["1010", "1011", "110", "1110", "000", "001", "011", "010", "1101", "1111"]
    for prefix in prefixes:
        trie.insert(prefix)

    addresses = ["101010", "111000", "0001", "0111", "11010"]
    for address in addresses:
        result = trie.search(address)
        print(f"Endereço: {address}, Prefixo encontrado: {result}")

if __name__ == "__main__":
    main()

