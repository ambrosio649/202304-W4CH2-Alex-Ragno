import { useState } from "react";
import { Footer } from "../footer/footer";
import { Form1 } from "../form1/form1";
import { Form2 } from "../form2/form2";
import { Header } from "../header/header";

function App() {
  const [step, setStep] = useState(1); // devuelve array de dos elementos: getter y setter

  const changeStep = (step: 1 | 2 | 3 | 4) => {
    setStep(step);
  };

  return (
    <>
      <Header></Header>
      {step === 1 && <Form1 changeStep={changeStep}></Form1>}
      {step === 2 && <Form2 changeStep={changeStep}></Form2>}
      {/* render incondicional */}
      <Footer></Footer>
    </>
  );
}

export default App;
