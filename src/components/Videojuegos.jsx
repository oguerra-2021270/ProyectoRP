import Todo from "./Todo";
// RECIBE FUNCIONES
export const ToDoList = ({ todos, todoDelete, setTodoEdit }) => {
  return (
    <div>
      <h2 className="text-right display-7">Lista de Videojuegos</h2>

      {todos.length === 0 ? (
        <div className="alert alert-primary">
          Actualmente no hay videojuegos en la lista. Agregalos desde el formulario.
        </div>
      ) : (
        todos.map((todoVideojuego) => (
          <Todo
            todo={todoVideojuego}
            key={todoVideojuego.id}
            todoDelete={todoDelete}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
};
