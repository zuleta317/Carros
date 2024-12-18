document.addEventListener('DOMContentLoaded', function() {
    // HTML de la navbar
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="paginainicio.html">Car Culture Colombia</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="paginainicio.html">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#modelos">Últimos videos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#noticias">Noticias</a></li>
                    <li class="nav-item"><a class="nav-link" href="Cuadernos.html">Cuadernos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#tecnologia">Tecnología</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    
    // Insertar el HTML de la navbar en el contenedor
    const navbarContainer = document.getElementById('navbarContainer');
    navbarContainer.innerHTML = navbarHTML;
});
