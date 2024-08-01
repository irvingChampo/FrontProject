import "./button.css";
    
const Button = ({ text, width, height, radio, margen, color  }) => {
    return (
      <button className="button"
        style={{ width: width, height: height, borderRadius: radio, margin: margen, backgroundColor:color }}
      >
      {text}
      </button>
    );
  };


export default Button;