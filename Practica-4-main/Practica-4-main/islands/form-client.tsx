import { useState } from "preact/hooks";

type Client = {
  Name: string;
  Email: string;
  Address: string;
  City: string;
  Country: string;
  Phone: string;
};

export default function ClientForm() {
  const [client, setClient] = useState<Client>({
    Name: "",
    Email: "",
    Address: "",
    City: "",
    Country: "",
    Phone: "",
  });

  function handleChange(event: any) {
    event.preventDefault();
    fetch("/api/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    });
    alert("USUARIO CREADO");
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "20px",
      }}
      onSubmit={handleChange}
    >
      <input
        type="text"
        placeholder="Name"
        value={client?.Name}
        required
        onChange={(event) => setClient({ ...client, Name: event.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={client?.Email}
        required
        onChange={(event) =>
          setClient({ ...client, Email: event.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={client?.Address}
        required
        onChange={(event) =>
          setClient({ ...client, Address: event.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={client?.City}
        required
        onChange={(event) => setClient({ ...client, City: event.target.value })}
      />
      <input
        type="text"
        placeholder="Country"
        value={client?.Country}
        required
        onChange={(event) =>
          setClient({ ...client, Country: event.target.value })}
      />
      <input
        type="text"
        placeholder="Phone"
        value={client?.Phone}
        onChange={(event) =>
          setClient({ ...client, Phone: event.target.value })}
        required
      />
      <button type="submit">Create</button>
    </form>
  );
}
