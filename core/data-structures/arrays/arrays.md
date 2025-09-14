# Los arreglos son una secuencia ordenada de datos que permiten almacenar múltiples valores de un mismo tipo de dato.

Animales = ["Perro", "Gato", "Pájaro", "Pez", "Conejo"]

# Acceso a elementos del arreglo
print(Animales[0])  # Imprime "Perro"
print(Animales[1])  # Imprime "Gato"
print(Animales[2])  # Imprime "Pájaro"
print(Animales[3])  # Imprime "Pez"
print(Animales[4])  # Imprime "Conejo"

Los arreglos tienen una propiedad llamada *zero-based*, lo que significa que el primer elemento del arreglo se encuentra en la posición 0, el segundo en la posición 1, y así sucesivamente.

# Operaciones con arreglos:

 ## Agregar = arr.push(elemento) // se agrega al final del arreglo
 ## Eliminar = arr.pop() // Elimina el último elemento del arreglo
 ## Obtener = arr[índice] // Se obtiene el elemento en la posición indicada por el índice

# Como funcionan a nivel de memoria:

  ## Memoria:
    - Los arreglos son almacenados en memoria de forma contigua, lo que significa que todos los elementos del arreglo se encuentran en direcciones de memoria adyacentes.
    
