const Exponent = ({num, exponent}) => {
    const result = num ** exponent;
  return (
    <div className="exponent-counter-container">    
    <p className="exponent-label">{num}² (Exponent Component)</p>
    <p className="exponent-result">
      {num} * {num} = <span className="total">{result}</span>
    </p>
  </div>
  )
}

export default Exponent