/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('numerosPrimos')
export class NumPController {
    @Get()
    getNumerosOrdenados() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ordenar Números</title>
            <!-- Incluye los archivos de Bootstrap CSS y JavaScript -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="container mt-5">
                <h1 class="mb-4">Ordenar Números</h1>
                <div class="form-group">
                    <label for="inputNumbers">Ingrese números separados por comas:</label>
                    <input type="text" class="form-control" id="inputNumbers" placeholder="Ejemplo: 5, 2, 9, 1, 7">
                </div>
                <button class="btn btn-primary mt-2" id="sortButton">Ordenar</button>
                <div class="mt-3">
                    <h3>Resultados:</h3>
                    <p id="result"></p>
                </div>
            </div>

            <!-- Incluye los archivos de Bootstrap JavaScript y jQuery -->
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

            <script>
                // Función para ordenar los números ingresados por el usuario
                function ordenarNumeros() {
                    const inputNumbers = document.getElementById("inputNumbers").value;
                    const numbersArray = inputNumbers.split(",").map(Number);

                    if (!inputNumbers.trim()) {
                        alert("Por favor, ingrese números separados por comas.");
                        return;
                    }

                    const sortedNumbers = numbersArray.sort((a, b) => a - b);
                    document.getElementById("result").textContent = "Números ordenados: " + sortedNumbers.join(", ");
                }

                // Asigna la función al botón "Ordenar"
                document.getElementById("sortButton").addEventListener("click", ordenarNumeros);
            </script>
        </body>
        </html>
        `;
    }
}
