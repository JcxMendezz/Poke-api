// src/Components/Items.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../Types/images"; // Importa tu tipo para los ítems
import "./items.module.css"; // Opcional: Estilos específicos para Items

interface ItemsProps {
  items: Pokemon[]; // Recibe un array de Pokémon como props
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  const navigate = useNavigate();

  // Función para navegar a los detalles del ítem
  const handleItemClick = (id: string) => {
    navigate(`/pokemon/${id}`); // Navega a la ruta dinámica del detalle
  };

  return (
      <div className="items-container">
        {items.map((item) => (
            <div
                key={item.id}
                className="item-card"
                onClick={() => handleItemClick(item.id)}
            >
              <img src={item.imgSrc} alt={item.name} />
              <p>{item.name}</p>
            </div>
        ))}
      </div>
  );
};

export default Items;
