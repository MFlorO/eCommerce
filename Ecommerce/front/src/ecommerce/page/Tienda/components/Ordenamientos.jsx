import { useState } from "react";


const styleSelect = {
  borderRadius:'10px',
  padding:'0.75rem',
  borderColor: '#cdcdcd',
  backgroundColor: 'white'
}




const Ordenamientos = () => {
  
  const [orden, setOrden] = useState(1);

  const handleOrdenChange = (event) => setOrden(event.target.value);

  return (
    <select value={orden} onChange={handleOrdenChange} style={styleSelect}>
      <option value={1}>Mayor a Menor</option> {/* Descendiente */}
      <option value={2}>Menor a Mayor</option> {/* Ascendiente */}
    </select>
  );
};

export default Ordenamientos;
