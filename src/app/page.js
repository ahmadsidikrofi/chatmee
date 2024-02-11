"use client"

import AuthPage from "@/app/components/AuthPage";
import { useEffect, useState } from "react";
import ChatsPage from "./components/ChatsPage";

export default function Home() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const storedUser = localStorage.getItem('username')
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  return (
    <div>
      {user ? <ChatsPage user={user}  /> : <AuthPage onAuth={(user) => setUser(user)} />}
    </div>
  );
}
