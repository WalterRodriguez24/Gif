import { Gifitem } from "./Gifitem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { imagenes, loading } = useFetchGifs(category);

  console.log(imagenes, loading);

  return (
    <>
      <h3>{category}</h3>
      {loading ? <h2>cargando...</h2> : null}

      <div className="card-grid">
        {imagenes.map((image) => (
          <Gifitem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
