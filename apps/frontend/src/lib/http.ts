import config from "@/config";
import { sleep } from "@/utils";
import axios from "axios";
import { toast } from "sonner";

export const http = axios.create({
  baseURL: config.API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const httpError = async (error: unknown) => {
  if (!axios.isAxiosError(error)) return toast.error("Something went wrong!");
  if (!error.response) return toast.error("Connection error!");

  if (error.response.status === 401) {
    toast.error("Unauthorized access! Please login again.");
    await sleep(2000);
    location.href = "/login";
    localStorage.removeItem("token");
  }

  let errorMessage = "Something went wrong!";
  let errorDescription = "Please try again later.";

  const { message, errors } = error.response.data;

  message && (errorMessage = message);
  errors && (errorDescription = JSON.stringify(errors));

  toast.error(errorMessage, {
    description: errorDescription,
  });
};
