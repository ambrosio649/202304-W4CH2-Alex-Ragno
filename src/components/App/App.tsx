import { ChangePage } from "../changePage/changePage";
import { Footer } from "../footer/footer";
import { Form1 } from "../form1/form1";
import { Form2 } from "../form2/form2";
import { Header } from "../header/header";

function App() {
  return (
    <>
      <Header></Header>

      <Form1></Form1>
      <Form2></Form2>
      <ChangePage></ChangePage>
      <Footer></Footer>
    </>
  );
}

export default App;
