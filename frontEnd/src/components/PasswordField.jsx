import React, {useState} from 'react';

function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" field mb-3">
    <span onClick={() => {setShowPassword(!showPassword)}}>
      {showPassword ? <i className="input-icon fas fa-eye"></i> :  <i className="input-icon fas fa-eye-slash active" ></i>}
      </span>
      <input name={props.name}  value={password} className="input-field" placeholder={props.placeholder} type={showPassword ? 'text' : 'password'} onChange={(e) => setShowPassword(e.target.value)}/>
    </div>
  );
}

export default PasswordField;


