export function Form2() {
  return (
    <section>
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
    </section>
  );
}
