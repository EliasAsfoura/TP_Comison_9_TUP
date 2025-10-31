import React, { useState } from "react";
import SocioForm from "./SocioForm";
import SociosList from "./SocioList";

function Socios({ socios, setSocios }) {
  const [socioToEdit, setSocioToEdit] = useState(null);

  const addSocio = (newSocio) => setSocios([...socios, newSocio]);
  const updateSocio = (updatedSocio) => {
    setSocios(socios.map((s) => (s.id === updatedSocio.id ? updatedSocio : s)));
    setSocioToEdit(null);
  };
  const deleteSocio = (id) => setSocios(socios.filter((s) => s.id !== id));
  const handleEdit = (socio) => setSocioToEdit(socio);
  const handleCancelEdit = () => setSocioToEdit(null);

  return (
    <div className="page-container">
      <h2>Gestión de Socios</h2>
      <SocioForm
        onAddSocio={addSocio}
        onUpdateSocio={updateSocio}
        socioToEdit={socioToEdit}
        onCancelEdit={handleCancelEdit}
      />
      <SociosList
        socios={socios}
        onDeleteSocio={deleteSocio}
        onEditSocio={handleEdit}
      />
    </div>
  );
}

export default Socios;
