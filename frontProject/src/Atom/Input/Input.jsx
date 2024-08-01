    import "./input.css";
    
    const Input = ({ type, placeholder, width, height  }) => {
        return (
          <input
            style={{ width: width, height: height }}
            type={type}
            placeholder={placeholder}
          />
        );
      };


export default Input;