import random
import string

def generate_random_word(length):
    return ''.join(random.choice(string.ascii_lowercase) for _ in range(length))

def generate_word_list(num_words, min_length=3, max_length=10):
    words = [generate_random_word(random.randint(min_length, max_length)) for _ in range(num_words)]
    return words

def save_words_to_file(words, filename):
    with open(filename, 'w') as f:
        for word in words:
            f.write(word + '\n')

num_words = 13000
words = generate_word_list(num_words)
save_words_to_file(words, 'words.txt')
