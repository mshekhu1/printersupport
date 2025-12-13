"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [gender, setGender] = useState("");
  const router = useRouter();

  const startChat = () => {
    if (!gender) return alert("Select gender");
    router.push(`/chat?gender=${gender}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Random Video Chat</h1>

      <select onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="both">Both</option>
      </select>

      <br /><br />
      <button onClick={startChat}>Start Chat</button>
    </div>
  );
}
