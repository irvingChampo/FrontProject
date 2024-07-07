    import "./input.css";
    
    // eslint-disable-next-line react/prop-types
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