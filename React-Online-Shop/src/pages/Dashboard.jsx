import React, { useEffect } from "react";
import Container from "../components/Container";
import useStore from "../store/useStore";

const Dashboard = () => {
  const { data, error, loading, fetchData } = useStore();

  useEffect(() => {
    fetchData(`${import.meta.env.VITE_BASE_URL}products`);
  }, []);

  return (
    <section>
      <Container>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {data && (
          <div className=" w-full">
            <h1>Products</h1>
            <ul>
              {data.map((item) => (
                <li key={item.id}>{item.title}</li> 
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Dashboard;
