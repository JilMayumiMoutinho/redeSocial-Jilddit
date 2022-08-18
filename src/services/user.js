import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../constants/urls";
import { goToFeed, goToLogin } from "../routes/coordinator";

export const login = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      const userName = body.email.split("@")[0];
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", userName);
      clear();
      goToFeed(navigate);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        title: "Error!",
        text: `Ocorreu um erro, tente novamente. Erro ${err}`,
        icon: "error",
        confirmButtonText: "Sad, but ok!",
      });
      setIsLoading(false);
    });
};

export const logout = (navigate) => {
  localStorage.removeItem("token");
  goToLogin(navigate);
};

export const signUp = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", body.username);
      clear();
      setIsLoading(false);
      goToFeed(navigate);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};
