"use client";

import React, { useState, useEffect } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

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
    <>
      {step === 1 ? (
        <Step1
          values={values}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
        />
      ) : (
        <Step2
          values={values}
          handleRemedioChange={handleRemedioChange}
          addRemedio={addRemedio}
          removeRemedio={removeRemedio}
          handleSubmit={handleSubmit}
          handleBack={() => setStep(1)}
        />
      )}
    </>
  );
};

export default FormularioConsulta;
