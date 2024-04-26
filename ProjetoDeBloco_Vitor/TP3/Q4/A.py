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
