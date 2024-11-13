"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormularioConsulta: React.FC = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    nome: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    dataConsulta: "",
    diagnostico: "",
    prescricao: "",
    proximaConsulta: "",
    remedios: [{ nome: "", hora: "", dosagem: "" }],
  });

  useEffect(() => {
    if (step === 2) {
      const savedValues = localStorage.getItem("formStep1");
      if (savedValues) {
        setValues((prevValues) => ({
          ...prevValues,
          ...JSON.parse(savedValues),
        }));
      }
    }
  }, [step]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRemedioChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const remedios = [...values.remedios];
    remedios[index] = { ...remedios[index], [name]: value };
    setValues({ ...values, remedios });
  };

  const addRemedio = () => {
    setValues({
      ...values,
      remedios: [...values.remedios, { nome: "", hora: "", dosagem: "" }],
    });
  };

  const removeRemedio = (index: number) => {
    const remedios = values.remedios.filter((_, i) => i !== index);
    setValues({ ...values, remedios });
  };

  const handleNext = () => {
    localStorage.setItem("formStep1", JSON.stringify(values));
    setStep(2);
  };

  const handleSubmit = () => {
    console.log("Dados do formulário:", values);
    console.table(values.remedios);
    setValues({
      nome: "",
      dataNascimento: "",
      telefone: "",
      email: "",
      dataConsulta: "",
      diagnostico: "",
      prescricao: "",
      proximaConsulta: "",
      remedios: [{ nome: "", hora: "", dosagem: "" }],
    });
    setStep(1);
  };

  return (
    <FormContainer>
      <form>
        {step === 1 ? (
          <>
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
          </>
        ) : (
          <>
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
            <button
              type="button"
              onClick={addRemedio}
              className="mt-2 text-blue-500"
            >
              Adicionar Remédio
            </button>

            <div className="flex justify-center space-x-4 mt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
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
          </>
        )}
      </form>
    </FormContainer>
  );
};

export default FormularioConsulta;
