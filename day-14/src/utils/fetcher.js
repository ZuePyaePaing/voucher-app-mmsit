import useTokenStore from "../stores/useTokenStore";
const fetcher = async (url) => {
  const { token } = useTokenStore.getState();
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  return response.json();
};

export default fetcher;
