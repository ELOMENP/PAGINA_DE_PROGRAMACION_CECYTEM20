// Función para ejecutar el código PSeInt
        function ejecutarCodigo() {
            // Obtener el código del área de texto
            var codigo = document.getElementById("codigoPSeInt").value;
            
            // Obtener las cadenas de texto entre comillas
            var textoComillas = codigo.match(/"([^"]*)"/g);
            
            // Crear un nuevo div para mostrar las cadenas de texto entre comillas
            var divResultado = document.getElementById("resultadoUsuario");
            divResultado.innerHTML = ''; // Limpiamos el contenido anterior
            
            // Iterar sobre las cadenas de texto entre comillas y mostrarlas con el estilo adecuado
            if (textoComillas) {
                textoComillas.forEach(function(texto) {
                    texto = texto.slice(1, -1); // Eliminamos las comillas
                    var divTexto = document.createElement("div");
                    divTexto.classList.add("texto-comillas");
                    divTexto.textContent = texto;
                    divResultado.appendChild(divTexto);
                });
            }
        }
        
        // Función para manejar el mensaje de la ventana de PSeInt
        window.addEventListener("message", function(event) {
            // Verificar si el mensaje proviene de la ventana de PSeInt
            if (event.source === document.getElementById("ventanaPSeInt").contentWindow) {
                // Mostrar el resultado del programa
                document.getElementById("resultadoPSeInt").srcdoc = event.data;
            }
        });