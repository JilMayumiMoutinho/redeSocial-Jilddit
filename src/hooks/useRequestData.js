import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { goToLogin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        goToLogin(navigate);
        console.log(err.response.data);
      /*   Swal.fire({
          title: "Error!",
          text: `Ocorreu um erro, tente novamente. Erro ${err}`,
          icon: "error",
          confirmButtonText: "Sad, but ok!",
        }); */
      });
  }, [url]);

  return data;
};

export default useRequestData;
