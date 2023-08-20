import { useEffect } from "react";
import { useState } from "react";
import { url } from "../Configs/types";

export const useToken = (email: string) => {
   const [token, setToken] = useState<string>("");
   const [tokenLoading, setTokenLoading] = useState<boolean>(false);
   useEffect(() => {
      setTokenLoading(true);
      if (email) {
         fetch(`${url}email=${email}`, {
            method: "POST",
            headers: {
               " content-type": "application/json",
            },
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.token) {
                  setToken(data.token);
                  setTokenLoading(false);
                  localStorage.setItem("dreamoneyToken", data.token);
               }
            })
            .catch((err) => {
               setTokenLoading(false);
            })
            .finally(() => {
               setTokenLoading(false);
            });
      }
   }, [email]);

   return { token, tokenLoading };
};
