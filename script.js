
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    // Validar que el nombre no exista ya en la lista
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista');
        return;
    }
    
    // Agregar el nombre al array y actualizar la lista
    amigos.push(nombre);
    actualizarLista();
    
    // Limpiar el input
    input.value = '';
    input.focus();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar lista actual
    lista.innerHTML = '';
    
    // Agregar cada amigo a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Verificar que haya al menos 2 amigos para sortear
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para hacer el sorteo');
        return;
    }
    
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡${amigoSeleccionado} es tu amigo secreto!</li>`;
}
