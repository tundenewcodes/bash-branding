const Button = ({ text, className, styles, width }) => {
  return (
    <button
    
      style={{
        width:width,
        ...styles,
      }}
      className={`${className} button-component`}
    >
      {text}
    </button>
  );
};

export default Button;
