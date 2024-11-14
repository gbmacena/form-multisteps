import React from "react";
import { FormContainer, Title, Label, Input } from "../styles/FormStyles";

interface Remedio {
  nome: string;
  hora: string;
  dosagem: string;
}

interface Step2Props {
  values: {
    remedios: Remedio[];
  };
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
  return (
    <FormContainer>
      <Title>Adicionar Remédios</Title>
      {values.remedios.map((remedio, index) => (
        <div key={index} className="mb-4">
          <Label>Nome do Remédio</Label>
          <Input
            name="nome"
            type="text"
            value={remedio.nome}
            onChange={(e) => handleRemedioChange(index, e)}
          />

          <Label>Hora</Label>
          <Input
            name="hora"
            type="time"
            value={remedio.hora}
            onChange={(e) => handleRemedioChange(index, e)}
          />

          <Label>Dosagem</Label>
          <Input
            name="dosagem"
            type="text"
            value={remedio.dosagem}
            onChange={(e) => handleRemedioChange(index, e)}
          />

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
          onClick={handleSubmit}
          className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Enviar
        </button>
      </div>
    </FormContainer>
  );
};

export default Step2;
