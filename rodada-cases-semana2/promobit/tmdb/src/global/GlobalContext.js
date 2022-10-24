import { createContext } from "react";
import axios from "axios"
import { useEffect, useState } from "react"

export const GlobalContext = createContext()


export const useRequest= (url, path, state) => {
    const [data, setData] = useState(state)
  
    const getData = () => {
      axios
        .get(`${url}${path}`)
        .then((res) => {setData(res.data)})
        .catch((err) => {alert(err.message)});
    };
  
    useEffect(() => {
      getData()
    }, [path])
  
    return [data]
  };