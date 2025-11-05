import { useState, useEffect } from "react"; //debe usarse fuera de return
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { db } from "./data/db";

function App() {
  // si fuera api no se puede hacer asi porque los datos llegan asincronos
  const[data, setData] = useState(db);

  // si fuera api usar esta forma para traer datos porque se hace de forma asincrona
  // useEffect(() => {
  //   setData(db)
  // })

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {/* se usa map para iterar sobre arreglo */}
          {data.map((guitar) => (
            <Guitar
              // props (atributos) se envia objeto de guitarra:
              key={guitar.id}
              guitar={guitar}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App
