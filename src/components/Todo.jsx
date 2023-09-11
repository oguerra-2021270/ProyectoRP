// RECIBE FUNCIONES EN ARGUMENTO
const Todo = ({ todo, todoDelete, setTodoEdit }) => {
    return (
        <div className='card mt-2'>
            <div className='card-body'>
                <h1 className='card-title text-right'>
                    {todo.title}
                </h1>
                <p className='card-text text-right'>
                    <strong>Descripcion:</strong><br />
                    {todo.description}
                </p>
                <hr />
                <div className='d-flex justify-content-end'>
                    <button
                        // CONVERTIR A FUNCION FLECHA
                        onClick={() => setTodoEdit(todo)}
                        className='btn btn-sm btn-outline-primary mr-2'>
                        Editar
                    </button>
                    {/* ELIMINA TO DO */}
                    <button onClick={() => todoDelete(todo.id)} className='btn btn-sm btn-outline-danger'>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo;