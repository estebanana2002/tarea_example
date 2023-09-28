/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('names')
export class NamesController {

    @Get()
    name() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nombre de Usuario</title>

            <!-- Agregar enlaces a las bibliotecas Bootstrap -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </head>
        <body>

        <div class="container mt-5">
            <h1>Solicitar Nombre de Usuario</h1>
            <form>
                <div class="form-group">
                    <label for="nombreUsuario">Nombre de Usuario:</label>
                    <input type="text" class="form-control" id="nombreUsuario" placeholder="Ingrese su nombre">
                </div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="mostrarNombre">Mostrar Nombre</button>
            </form>
        </div>

        <!-- Modal para mostrar el nombre -->
        <div class="modal fade" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Nombre de Usuario</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- Aquí se mostrará el nombre de usuario -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Script para mostrar el nombre en el modal utilizando una función de flecha -->
        <script>
            document.getElementById("mostrarNombre").addEventListener("click", () => {
                var nombreUsuario = document.getElementById("nombreUsuario").value;
                var modalBody = document.getElementById("modalBody");

                if (nombreUsuario) {
                    modalBody.innerHTML = "Nombre de Usuario: " + nombreUsuario;
                } else {
                    modalBody.innerHTML = "Por favor, ingrese un nombre de usuario.";
                }

                $('#myModal').modal('show');
            });
        </script>

        </body>
        </html>
    `;
    }
}
