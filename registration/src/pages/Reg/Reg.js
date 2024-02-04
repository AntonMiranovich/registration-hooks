import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function Reg() {
  const [inp, setInp] = useState({ email: "", password: "", confirm: "" });

  function checkVal(e) {
    setInp({ ...inp, [e.target.name]: e.target.value });
  }

  function saveData() {
    try {
      if (!inp.password || !inp.email || !inp.confirm)
        throw new Error("есть незаполненные поля");
      if (!/^[\w\d]+@[\w]+\.[\w]{2,4}$/gm.test(inp.email))
        throw new Error("Email введен неверно");
      if (inp.password != inp.confirm) throw new Error("пороль не совпадает");
      console.log(inp);
      setInp({ email: "", password: "", confirm: "" });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <TextField
          onChange={checkVal}
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={inp.email}
        />
      </div>
      <div>
        <TextField
          onChange={checkVal}
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={inp.password}
        />
      </div>
      <div>
        <TextField
          onChange={checkVal}
          name="confirm"
          id="outlined-basic"
          label="ConfirmPassword"
          variant="outlined"
          value={inp.confirm}
        />
      </div>

      <Button onClick={saveData} variant="outlined">
        Login
      </Button>

      <p>
        Already have an account?
        <Link to="/">
          <Button variant="text">SIGN IN</Button>
        </Link>
      </p>
    </div>
  );
}

export default Reg;
