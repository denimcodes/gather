import { useState } from "react";
import { useOrbis } from "../context/OrbisContext";
import { Button } from "./Button";

export const ConnectButton = () => {
  const orbis = useOrbis();
  const [connected, setConnected] = useState(false);

  const connect = async () => {
    let res = await orbis.connect_v2({
      provider: window.phantom?.solana,
      chain: "solana",
      lit: false
    })
    console.log(res);
    if(res.status === 200) {
      setConnected(true);
    }
  }
  const logout = async () => {
    let res = await orbis.logout();
    console.log(res);
    if(res.status === 200) {
      setConnected(false);
    }
  }

  return (
    <Button onClick={connected ? logout : connect}>{connected ? "Connected" : "Connect"}</Button>
  )
}