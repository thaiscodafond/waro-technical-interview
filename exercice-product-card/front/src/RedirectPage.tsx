import { useNavigate } from "react-router-dom";

const RedirectPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 20,
      }}
    >
      <img
        width={200}
        src="https://cdn.prod.website-files.com/64d8f9385436d9a10dfd58d9/64e1ccfe49e674bb29d6e9bc_Waro19-p-2000.png"
        alt="Waro logo"
      />
      <button onClick={() => navigate(-1)} />
    </div>
  );
};

export default RedirectPage;
