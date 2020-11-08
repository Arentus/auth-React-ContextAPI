import React, { useState, useEffect } from "react";

export const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    user: "",
    password: "",
  });

  const handleChange = (prop: any) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  return (
    <div className="w-full max-w-xs container mt-4 m-auto flex flex-col align-center justify-center">
      <div className="w-full text-center">
        <h2 className="text-xl">Crear cuenta</h2>
      </div>
      <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            value={values.name}
            onChange={handleChange("name")}
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            value={values.email}
            onChange={handleChange("email")}
            type="email"
            placeholder="johndow@email.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Usuario
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Johndoe123"
            value={values.user}
            onChange={handleChange("user")}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={values.password}
            onChange={handleChange("password")}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              console.log(values);
            }}
          >
            Registrarse
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        Bienvenido recuerda tus datos. Al crear tu cuenta aceptas los terminos y
        condiciones de Servicio
      </p>
    </div>
  );
};
