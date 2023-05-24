type PropsType = {
  changeStep: (step: 1 | 2 | 3 | 4) => void;
};

export function Form2({ changeStep }: PropsType) {
  const handleClick = () => {
    changeStep(1);
  };
  return (
    <section>
      <h2>Step 2</h2>
      <form>
        <label htmlFor="username">
          <p>Username:</p>
          <input type="text" name="" id="username" />
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input type="password" name="" id="password" />
        </label>

        <p>Account type:</p>
        <select name="select">
          <option value="personal" selected>
            Personal
          </option>
          <option value="pro">Pro</option>
          <option value="business">Business</option>
        </select>
      </form>
      <button onClick={handleClick}>Previous page</button>
    </section>
  );
}
