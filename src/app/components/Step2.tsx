import React, { useState } from "react";

interface Step2Props {
  values: any;
  handleRemedioChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  addRemedio: () => void;
  removeRemedio: (index: number) => void;
  handleSubmit: () => void;
  handleBack: () => void;
}

const Step2: React.FC<Step2Props> = ({
  values,
  handleRemedioChange,
  addRemedio,
  removeRemedio,
  handleSubmit,
  handleBack,
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    values.remedios.forEach((remedio: any, index: number) => {
      if (!remedio.nome)
        newErrors[`nome${index}`] = "Nome do remédio é obrigatório";
      if (!remedio.hora) newErrors[`hora${index}`] = "Hora é obrigatória";
      if (!remedio.dosagem)
        newErrors[`dosagem${index}`] = "Dosagem é obrigatória";
    });
    return newErrors;
  };

  const handleFormSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      handleSubmit();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-5 p-5 border border-gray-300 rounded-lg bg-gray-100">
      {values.remedios.map((remedio: any, index: number) => (
        <div key={index} className="mb-4">
          <label className="block mt-2 font-bold mb-1">Nome do Remédio</label>
          <input
            name="nome"
            type="text"
            value={remedio.nome}
            onChange={(e) => handleRemedioChange(index, e)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          {errors[`nome${index}`] && (
            <p className="text-red-500 text-sm">{errors[`nome${index}`]}</p>
          )}

          <label className="block mt-2 font-bold mb-1">Hora</label>
          <input
            name="hora"
            type="time"
            value={remedio.hora}
            onChange={(e) => handleRemedioChange(index, e)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          {errors[`hora${index}`] && (
            <p className="text-red-500 text-sm">{errors[`hora${index}`]}</p>
          )}

          <label className="block mt-2 font-bold mb-1">Dosagem</label>
          <input
            name="dosagem"
            type="text"
            value={remedio.dosagem}
            onChange={(e) => handleRemedioChange(index, e)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          {errors[`dosagem${index}`] && (
            <p className="text-red-500 text-sm">{errors[`dosagem${index}`]}</p>
          )}

          <button
            type="button"
            onClick={() => removeRemedio(index)}
            className="mt-2 text-red-500"
          >
            Remover
          </button>
        </div>
      ))}
      <button type="button" onClick={addRemedio} className="mt-2 text-blue-500">
        Adicionar Remédio
      </button>

      <div className="flex justify-center space-x-4 mt-4">
        <button
          type="button"
          onClick={handleBack}
          className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Voltar
        </button>
        <button
          type="button"
          onClick={handleFormSubmit}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Step2;
