import './styles.css';

const CardLogin = () => {
  return (
    <div className="login-container base-card">
      <h1>LOGIN</h1>
      <form action="submit" className='form-container'>
        <div className="input-email">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="input-password">
          <input
            type="password"
            className="form-control base-input"
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="login-submit">
            <button>FAZER LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default CardLogin;
