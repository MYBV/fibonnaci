# API de Fibonacci

Esta API permite obtener el valor de la serie de Fibonacci que corresponde a un índice dado.
Se compone sólo de un endpoint que obtiene por parámetro (método GET) el índice requerido.


## Cálculos 🔣

Para hallar el valor correspondiente al índice dado se implementa la fórmula de Fibonacci, a saber:

   ``F_n = (phi^n - psi^n)/sqrt(5)``

siendo sqrt la raíz cuadrada de cinco y las variables phi y psi las raíces de la ecuación cuadrática 

   ```X^2 - X -1 = 0```

phi = (1 + sqrt(5)) / 2
psi = (1 - sqrt(5)) / 2

## Pre-requisitos 📋

_Necesitas instalar lo siguiente:_ ⚠️

* Instala Nodejs

## Deploy 🚀
_Ejecuta los siguientes pasos en orden:_

### Paso 1 Clona el repositorio: 

  ```$ git clone https://github.com/MYBV/fibonnaci``` ⏬

### Paso 2 Entra a la carpeta y ejecuta el siquiente comando: 

  ```$ npm install``` 📂	

Ya con estos dos pasos se tiene el código del proyecto y se instalan las dependencias.

### Paso 3 Compila el proyecto:

Ejecuta el siguiente comando
   ```npm run tsc```

### Paso 4 Inicia el servidor:
Ejecuta el siguiente comando
   ```npm run start```



## Uso
    
   La API tiene un único endpoint que acepta un parámetro numero que representa el índice de Fibonacci a calcular:

   ```GET /fibonacci/:numero```


   La respuesta será un objeto JSON con el valor de Fibonacci correspondiente al índice numero:

    {
        "indice": "3",
        "valor": "2"
    }

   ### Ejemplo

   Calcular el valor de Fibonacci correspondiente al índice 3:

   ```GET /fibonacci/3```

   ```response```

    {
        "indice": "6",
        "valor": "8"
    }

   Si desea probar el endpoint del aPI puede ingresar lo siguiente en su navegador:
   ```http://localhost:5000/fibonacci/:numero```
   reemplazando [:numero] por el índice que desea obtener, por ejemplo, para solicitar el indice 3 la ruta quedaría de la siguiente forma: 
   ```http://localhost:5000/fibonacci/3```

   también puede importar la colección de ```postman``` que se encuentra en el archivo ```Fibonacci.postman_collection.json``` y ejecutar el request del endpoint desde este aplicativo, cambiando al final del request el indice que se desea solicitar.

## Dockerizando 🐋

Si desea utilizar un archivo docker para implementa esta API, debe ejecutar el siguiente comando en la terminal:
   ```docker run -p 5000:5000 yusseth12/fibonacci:v1```
Con esto descargará la imagen del docker e iniciará su funcionamiento.

## Notas de desarrollo 📝

   ### Ventajas de usar la fórmula cerrada de Fibonacci: 💪

* La solución es mucho más rápida que la implementación clásica (utilizar un ciclo) su complejidad temporal es O(1).
* La solución es más simple y concisa, ya que no es necesario mantener un seguimiento de los valores anteriores de Fibonacci.

   ### Limitantes: 👎

   * Esta implementación utiliza la fórmula cerrada de Fibonacci, que puede generar errores de precisión para valores muy grandes de n. 
   * Por lo tanto, esta implementación no es adecuada para valores extremadamente grandes de n.

   ### Optimizaciones: 👌

   * Implementar una memoria caché para almacenar los resultados anteriores, lo que podría mejorar el rendimiento para índices grandes y reducir el tiempo de procesamiento necesario para calcularlos.
   * Determinar el valor máximo que soporta la fórmula cerrada de Fibonacci para validar que el índice requerido no sea mayor a este valor.


## Construido con 🛠️

* [Nodejs](https://nodejs.org) - Entorno de ejecuciónJS.
* [Express](https://expressjs.com/) - Framework de nodejs utilizado.
* [npm](https://www.npmjs.com/) - Permite instalar diversas librerías utilizadas en el proyecto.

## Autor ✒️

* **Mayla Bautista** - [yusseth12@gmail.com](#des_Mayla) 👤.