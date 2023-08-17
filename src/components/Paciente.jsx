const Paciente = () => {
  return (
    <>
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-s-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""} <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}{" "}
          <span className="font-normal normal-case">Juan</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}{" "}
          <span className="font-normal normal-case">mail@mail.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}{" "}
          <span className="font-normal normal-case">10/10/2023</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {""}{" "}
          <span className="font-normal normal-case">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            maxime distinctio eligendi quod officia similique.
          </span>
        </p>
      </div>
    </>
  );
};

export default Paciente;
