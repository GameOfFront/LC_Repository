from numba import njit
from numba.experimental import jitclass
from numba.core import types

spec = [
    ('children', types.DictType(types.uint8, types.deferred_type())),
    ('is_end_of_prefix', types.boolean),
]

Node_type = types.deferred_type()
Node_type.define(Node.class_type.instance_type)

@jitclass(spec)
class Node:
    def __init__(self):
        self.children = {}
        self.is_end_of_prefix = False

    def get_child(self, bit):
        if bit in self.children:
            return self.children[bit]
        else:
            return None

    def add_child(self, bit):
        if bit not in self.children:
            self.children[bit] = Node()




class PrefixTree:
    def __init__(self):
        self.root = Node()

    def insert(self, prefix):
        current_node = self.root
        for bit in prefix:
            if current_node.get_child(int(bit)) is None:
                current_node.add_child(int(bit))
            current_node = current_node.get_child(int(bit))
        current_node.is_end_of_prefix = True

    def search(self, address):
        current_node = self.root
        longest_prefix = None
        current_prefix = ""
        for bit in address:
            if current_node.get_child(int(bit)) is not None:
                current_node = current_node.get_child(int(bit))
                current_prefix += bit
                if current_node.is_end_of_prefix:
                    longest_prefix = current_prefix
            else:
                break
        return longest_prefix
