import React, { useState } from "react";
import ActividadForm from "./ActividadForm";
import ActividadesList from "./ActividadesList";

function Actividades({ actividades, setActividades }) {
  const [actividadToEdit, setActividadToEdit] = useState(null);

  const addActividad = (newActividad) => setActividades([...actividades, newActividad]);
  const updateActividad = (updatedActividad) => {
    setActividades(
      actividades.map((a) => (a.id === updatedActividad.id ? updatedActividad : a))
    );
    setActividadToEdit(null);
  };
  const deleteActividad = (id) => setActividades(actividades.filter((a) => a.id !== id));
  const handleEdit = (actividad) => setActividadToEdit(actividad);
  const handleCancelEdit = () => setActividadToEdit(null);

  return (
    <div className="page-container">
      <h2>Gestión de Actividades</h2>
      <ActividadForm
        onAddActividad={addActividad}
        onUpdateActividad={updateActividad}
        actividadToEdit={actividadToEdit}
        onCancelEdit={handleCancelEdit}
      />
      <ActividadesList
        actividades={actividades}
        onEditActividad={handleEdit}
        onDeleteActividad={deleteActividad}
      />
    </div>
  );
}

export default Actividades;
