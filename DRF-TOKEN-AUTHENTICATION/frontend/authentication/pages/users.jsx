export default function Users() {
  const login = async () => {
    const res = await fetch("http://127.0.0.1:8000/users", {
      headers: {
        // "Content-Type": "application/json",
        Authorization: 'Token '+String(localStorage.getItem("token")),
      },
    });
    const data = await res.json();
    if (res.status==200) {
      console.log(data);
    }
  };
  return (
    <>
      <button
        onClick={() => {
          login();
        }}
      >
        users
      </button>
    </>
  );
}
