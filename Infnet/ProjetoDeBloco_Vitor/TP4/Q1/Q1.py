class BinaryHeap:
    def __init__(self):
        self.heap = []

    def insert(self, item):
        self.heap.append(item)
        self._sift_up(len(self.heap) - 1)

    def find_min(self):
        return self.heap[0] if self.heap else None

    def extract_min(self):
        if len(self.heap) == 1:
            return self.heap.pop()
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._sift_down(0)
        return root

    def build_heap(self, items):
        self.heap = items[:]
        for i in range(len(items) // 2, -1, -1):
            self._sift_down(i)

    def _sift_up(self, idx):
        parent = (idx - 1) // 2
        while idx > 0 and self.heap[idx]['priority'] < self.heap[parent]['priority']:
            self.heap[idx], self.heap[parent] = self.heap[parent], self.heap[idx]
            idx = parent
            parent = (idx - 1) // 2

    def _sift_down(self, idx):
        smallest = idx
        left = 2 * idx + 1
        right = 2 * idx + 2
        if left < len(self.heap) and self.heap[left]['priority'] < self.heap[smallest]['priority']:
            smallest = left
        if right < len(self.heap) and self.heap[right]['priority'] < self.heap[smallest]['priority']:
            smallest = right
        if smallest != idx:
            self.heap[idx], self.heap[smallest] = self.heap[smallest], self.heap[idx]
            self._sift_down(smallest)

    def is_empty(self):
        return len(self.heap) == 0


patients = [
    {'name': 'João', 'priority': 3},
    {'name': 'Maria', 'priority': 1},
    {'name': 'Pedro', 'priority': 4},
    {'name': 'Ana', 'priority': 2},
    {'name': 'Mariana', 'priority': 5},
    {'name': 'Rafael', 'priority': 2},
    {'name': 'Carolina', 'priority': 3}
]

heap = BinaryHeap()
heap.build_heap(patients)
print(heap.find_min())
print(heap.extract_min())
heap.insert({'name': 'Carlos', 'priority': 2})
while not heap.is_empty():
    print(heap.extract_min())
