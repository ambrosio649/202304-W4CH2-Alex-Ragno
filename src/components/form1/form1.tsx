export function Form1() {
  return (
    <section>
      <form>
        <label htmlFor="name">
          <p>Name:</p>
          <input type="text" name="" id="name" />
        </label>
        <label htmlFor="lastName">
          <p>Last name:</p>
          <input type="text" name="" id="last-name" />
        </label>
        <label htmlFor="birth-date">
          <p>Birth date:</p>
          <input type="date" name="" id="birth-date" />
        </label>
        <label htmlFor="gender">
          <p>Gender:</p>
          Male
          <input type="radio" name="" id="gender" />
          Female
          <input type="radio" name="" id="gender" />
          Other
          <input type="radio" name="" id="gender" />
          Prefer not to mention
          <input type="radio" name="" id="gender" />
        </label>
        <label htmlFor="email">
          <p>Email:</p>
          <input type="email" name="" id="email" />
        </label>
        <label htmlFor="checkbox">
          <p>Desea recibir información de nuestra newsletter?</p>
          <input type="checkbox" name="" id="chexkbox" />
        </label>
      </form>
    </section>
  );
}
