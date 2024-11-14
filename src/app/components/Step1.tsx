import React from "react";
import {
  FormContainer,
  Title,
  Label,
  Input,
  TextArea,
} from "../styles/FormStyles";

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
  return (
    <FormContainer>
      <Title>Cadastro de Paciente</Title>
      <Label>Nome</Label>
      <Input
        name="nome"
        type="text"
        value={values.nome}
        onChange={handleInputChange}
      />

      <Label>Data de Nascimento</Label>
      <Input
        name="dataNascimento"
        type="date"
        value={values.dataNascimento}
        onChange={handleInputChange}
      />

      <Label>Telefone</Label>
      <Input
        name="telefone"
        type="text"
        value={values.telefone}
        onChange={handleInputChange}
      />

      <Label>Email</Label>
      <Input
        name="email"
        type="email"
        value={values.email}
        onChange={handleInputChange}
      />

      <Label>Data da Consulta</Label>
      <Input
        name="dataConsulta"
        type="date"
        value={values.dataConsulta}
        onChange={handleInputChange}
      />

      <Label>Diagnóstico</Label>
      <TextArea
        name="diagnostico"
        value={values.diagnostico}
        onChange={handleInputChange}
      />

      <Label>Prescrição</Label>
      <TextArea
        name="prescricao"
        value={values.prescricao}
        onChange={handleInputChange}
      />

      <Label>Data da Próxima Consulta</Label>
      <Input
        name="proximaConsulta"
        type="date"
        value={values.proximaConsulta}
        onChange={handleInputChange}
      />

      <div className="flex justify-center space-x-4 mt-4">
        <button
          type="button"
          onClick={handleNext}
          className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Próximo
        </button>
      </div>
    </FormContainer>
  );
};

export default Step1;
