import React, { useState } from 'react';

function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" field mb-3">
    <span onClick={() => setShowPassword(!showPassword)}>
       {showPassword ? <i className="input-icon fas fa-eye"></i> :  <i className="input-icon fas fa-eye-slash active" ></i>}
      </span>
      <input className="input-field" id="password2" placeholder="Confirma tu contraseña" type={showPassword ? 'text' : 'password'} />
    </div>
  );
}

export default PasswordField;
