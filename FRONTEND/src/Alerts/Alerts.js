import Swal from "sweetalert2";

export function successAlert(message) {
  Swal.fire({
    title: "Successfull!!",
    text: message,
    icon: "success",
  });
}

export  function failureAlert(message) {
    Swal.fire({
      title: "Failed!!",
      text: message,
      icon: "error",
    });
  }
  