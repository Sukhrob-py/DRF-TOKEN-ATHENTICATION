import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    const res = await fetch("http://127.0.0.1:8000/get-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    console.log(res.status);
    const data = await res.json();
    if (res.status==200 && data.token) {
      localStorage.setItem("token",data.token)
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </>
  );
}
