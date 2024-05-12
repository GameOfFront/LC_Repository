class Node:
    def __init__(self, name):
        self.name = name
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, name):
        new_node = Node(name)
        if self.root is None:
            self.root = new_node
            return
        current_node = self.root
        while True:
            if name < current_node.name:
                if current_node.left is None:
                    current_node.left = new_node
                    break
                current_node = current_node.left
            else:
                if current_node.right is None:
                    current_node.right = new_node
                    break
                current_node = current_node.right

    def find(self, name):
        current_node = self.root
        while current_node:
            if name == current_node.name:
                return current_node
            elif name < current_node.name:
                current_node = current_node.left
            else:
                current_node = current_node.right
        return None

    def _insert(self, current_node, name):
        if name < current_node.name:
            if current_node.left is None:
                current_node.left = Node(name)
            else:
                self._insert(current_node.left, name)
        elif name > current_node.name:
            if current_node.right is None:
                current_node.right = Node(name)
            else:
                self._insert(current_node.right, name)

    def delete(self, name):
        self.root = self._delete(self.root, name)

    def _delete(self, current_node, name):
        if current_node is None:
            return None
        if name < current_node.name:
            current_node.left = self._delete(current_node.left, name)
        elif name > current_node.name:
            current_node.right = self._delete(current_node.right, name)
        else:
            if current_node.left is None:
                return current_node.right
            elif current_node.right is None:
                return current_node.left
            else:
                min_larger_node = self._get_min(current_node.right)
                current_node.name = min_larger_node.name
                current_node.right = self._delete(current_node.right, min_larger_node.name)
        return current_node

    def _get_min(self, current_node):
        while current_node.left is not None:
            current_node = current_node.left
        return current_node

    def print_tree(self, node=None, level=0):
        if node is not None and level <= 5:
            self.print_tree(node.right, level + 1)
            print(' ' * 4 * level + '->', node.name)
            self.print_tree(node.left, level + 1)

    def get_root(self):
        return self.root

def main():
    tree = BinaryTree()
    try:
        with open("output.txt", "r") as file:
            for line in file:
                command = line.strip()
                tree.insert(command)
    except FileNotFoundError:
        print("O arquivo não foi encontrado. Verifique o nome e o caminho do arquivo.")

    print("Árvore Binária até a altura 5:")
    tree.print_tree(tree.root)

    found_node = tree.find("tmp") 
    if found_node:
        print("Registro encontrado:", found_node.name)
    else:
        print("Registro não encontrado.")

    root_node = tree.get_root()
    if root_node:
        print("Nó raiz da árvore:", root_node.name)
    else:
        print("A árvore está vazia.")

if __name__ == "__main__":
    main()

