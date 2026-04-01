function Usuarios() {
  const usuarios = [
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@gmail.com' },
    { id: 2, nombre: 'María López', correo: 'maria@gmail.com' },
    { id: 3, nombre: 'Carlos Ruiz', correo: 'carlos@gmail.com' },
  ]

  return (
    <div className="container">
      <h2>Lista de Usuarios</h2>

      {usuarios.map((usuario) => (
        <div className="card" key={usuario.id}>
          <h3>{usuario.nombre}</h3>
          <p>{usuario.correo}</p>
          <button>Editar</button>
        </div>
      ))}
    </div>
  )
}

export default Usuarios