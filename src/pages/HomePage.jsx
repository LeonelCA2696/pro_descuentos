import { useState } from "react"; // Importacion de hooks

const HomePage = () => {
  const [priceInitial, setPriceInitial] = useState(0); // Estado que maneja el presio inicial
  const [percentage, setPercentage] = useState(0); // Estado que maneja el porcentaje a descontar
  const [priceLessDiscount, setPriceLessDiscount] = useState(0); // EStado que maneja el presio menos descuentos

  // Funcion que calcula el presio menos descuento
  const discount = (price, discountPercentage) => {
    const discountAmount = (price * discountPercentage) / 100;
    const total = price - discountAmount;
    setPriceLessDiscount(total);
  };

  // Funcion que maneja el cambio del input price
  const handlePriceChange = (event) => {
    setPriceInitial(event.target.value);
  };

  // Funcion que maneja el cambio del input percentage
  const handlePercentageChange = (event) => {
    setPercentage(event.target.value);
  };

  // ## Retorno del Componente ## //
  return (
    <section className="w-full h-screen flex bg-blue-950 justify-center text-center text-white">
      <div className="container mx-auto h-auto">
        {/** Titulo */}
        <h1 className="w-full h-auto text-center text-4xl font-medium p-5 text-amber-500">
          Aplicar <span className="text-white">%</span> Decuento
        </h1>

        {/** Formulario */}
        <form className="w-full h-auto flex flex-col justify-center items-center p-5 my-10">
          {/** Input para ingresar el monto inicial */}
          <label className="flex flex-col text-left text-xl mb-10">
            <span className="mb-2">
              {" "}
              Precio <span className="text-amber-500 font-medium">Inicial</span>
            </span>
            <input
              type="number"
              className="w-full text-blue-950 h-12 rounded-lg p-2"
              min={0}
              onChange={handlePriceChange}
            />
          </label>

          {/** Input para ingresar el porcentaje a descontar */}
          <label className="flex flex-col text-left text-xl mb-10">
            <span className="mb-2">
              <span className="text-amber-500 font-medium">%</span> Descuento
            </span>
            <input
              type="number"
              className="w-full text-blue-950 h-12 rounded-lg p-2"
              min={0}
              onChange={handlePercentageChange}
            />
          </label>

          {/** Boton para aplicar el descuento */}
          <button
            onClick={(event) => {
              event.preventDefault();
              discount(priceInitial, percentage);
            }}
            className="bg-amber-700 w-64 h-12 rounded-lg font-medium p-2 hover:text-xl hover:w-60 active:border-2 active:border-white"
          >
            Calcular
          </button>
        </form>

        {/** Resultado del calculo con el descuento aplicado */}
        <div className="w-full h-auto flex flex-col">
          <p className="text-6xl text-amber-700">
            <span className=" text-white">RD$ </span>
            {priceLessDiscount}
          </p>
          <p className="font-light text-amber-700">Precion Final</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
