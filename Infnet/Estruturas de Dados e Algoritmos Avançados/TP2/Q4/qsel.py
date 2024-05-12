def particiona(array, chave, inicio, fim):

    ind_piv = fim
    pivo = array[ind_piv][chave]

    esq = inicio
    dir = fim - 1
    while True:

        while array[esq][chave] > pivo:
            esq += 1
        while array[dir][chave] < pivo and dir > esq:
            dir -= 1

        if esq >= dir:
            break

        array[esq], array[dir] = array[dir], array[esq]
        esq += 1

    array[esq], array[ind_piv] = array[ind_piv], array[esq]
    return esq

def quickselect(k, array, chave, inicio=0, fim=-1):
    if fim == -1:
        fim += len(array)

    if fim - inicio > 0:

        ind_piv = particiona(array, chave, inicio, fim)

        if k - 1 < ind_piv:
            quickselect(k, array, chave, inicio,
                        ind_piv - 1)

        elif k - 1 > ind_piv:
            quickselect(k, array, chave, ind_piv + 1, fim)
