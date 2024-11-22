import React, { useState } from "react";

interface Step1Props {
  values: any;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleNext: () => void;
}

const Step1: React.FC<Step1Props> = ({
  values,
  handleInputChange,
  handleNext,
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!values.nome) newErrors.nome = "Nome é obrigatório";
    if (!values.dataNascimento)
      newErrors.dataNascimento = "Data de Nascimento é obrigatória";
    if (!values.telefone) newErrors.telefone = "Telefone é obrigatório";
    if (!values.email) newErrors.email = "Email é obrigatório";
    if (!values.dataConsulta)
      newErrors.dataConsulta = "Data da Consulta é obrigatória";
    if (!values.diagnostico)
      newErrors.diagnostico = "Diagnóstico é obrigatório";
    if (!values.prescricao) newErrors.prescricao = "Prescrição é obrigatória";
    if (!values.proximaConsulta)
      newErrors.proximaConsulta = "Data da Próxima Consulta é obrigatória";
    return newErrors;
  };

  const handleNextStep = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      handleNext();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-5 p-5 border border-gray-300 rounded-lg bg-gray-100">
      <h2 className="text-center mb-5 text-2xl font-bold">
        Cadastro de Paciente
      </h2>

      <label className="block mt-2 font-bold mb-1">Nome</label>
      <input
        name="nome"
        type="text"
        value={values.nome}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}

      <label className="block mt-2 font-bold mb-1">Data de Nascimento</label>
      <input
        name="dataNascimento"
        type="date"
        value={values.dataNascimento}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {errors.dataNascimento && (
        <p className="text-red-500 text-sm">{errors.dataNascimento}</p>
      )}

      <label className="block mt-2 font-bold mb-1">Telefone</label>
      <input
        name="telefone"
        type="text"
        value={values.telefone}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {errors.telefone && (
        <p className="text-red-500 text-sm">{errors.telefone}</p>
      )}

      <label className="block mt-2 font-bold mb-1">Email</label>
      <input
        name="email"
        type="email"
        value={values.email}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <label className="block mt-2 font-bold mb-1">Data da Consulta</label>
      <input
        name="dataConsulta"
        type="date"
        value={values.dataConsulta}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {errors.dataConsulta && (
        <p className="text-red-500 text-sm">{errors.dataConsulta}</p>
      )}

      <label className="block mt-2 font-bold mb-1">Diagnóstico</label>
      <textarea
        name="diagnostico"
        value={values.diagnostico}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {errors.diagnostico && (
        <p className="text-red-500 text-sm">{errors.diagnostico}</p>
      )}

      <label className="block mt-2 font-bold mb-1">Prescrição</label>
      <textarea
        name="prescricao"
        value={values.prescricao}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {errors.prescricao && (
        <p className="text-red-500 text-sm">{errors.prescricao}</p>
      )}

      <label className="block mt-2 font-bold mb-1">
        Data da Próxima Consulta
      </label>
      <input
        name="proximaConsulta"
        type="date"
        value={values.proximaConsulta}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {errors.proximaConsulta && (
        <p className="text-red-500 text-sm">{errors.proximaConsulta}</p>
      )}

      <div className="flex justify-center space-x-4 mt-4">
        <button
          type="button"
          onClick={handleNextStep}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Step1;
