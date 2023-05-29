import { useExport } from "../../hooks/useExport";

const ColTwo = () => {
  const { bashy } = useExport();
  return (
    <div
      className="col-two"

    >
      <img
        src={bashy}
        alt="bashy"
        className="object-cover  "
       
      />
    </div>
  );
};

export default ColTwo;
