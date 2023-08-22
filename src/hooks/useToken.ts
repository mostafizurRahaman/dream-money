import { useEffect } from "react";
import { useState } from "react";
import { url } from "../Configs/types";

export const useToken = (email: string) => {
   const [token, setToken] = useState<string>("");
   const [tokenLoading, setTokenLoading] = useState<boolean>(false);

   console.log(email);
   useEffect(() => {
      setTokenLoading(true);

      if (email) {
         fetch(`${url}jwt?email=${email}`, {
            method: "POST",
            headers: {
               "content-type": "application/json",
            },
         })
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               if (data.token) {
                  setToken(data.token);
                  setTokenLoading(false);
                  localStorage.setItem("dreamoneyToken", data.token);
                  console.log("token", data);
               }
            })
            .catch(() => {
               setTokenLoading(false);
            })
            .finally(() => {
               setTokenLoading(false);
            });
      }
   }, [email]);

   return { token, tokenLoading };
};
