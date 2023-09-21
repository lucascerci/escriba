export function SnackbarAddOptions(type) {
    if (!type) return;
    switch (type) {
      case "error":
        return {
          color: "error",
          icon: "error",
          mode: "multi-line",
          position: "top",
          timeout: 7500,
          title: "Error",
          visible: true
        };
      case "info":
        return {
          color: "info",
          icon: "info",
          mode: "multi-line",
          position: "top",
          timeout: 0,
          title: "Information",
          visible: true
        };
      case "success":
        return {
          color: "success",
          icon: "check_circle",
          mode: "multi-line",
          position: "top",
          timeout: 7500,
          title: "Success",
          text: "That worked, hoorah.",
          visible: true
        };
      case "warning":
        return {
          color: "warning",
          icon: "warning",
          mode: "multi-line",
          position: "top",
          timeout: 7500,
          title: "Warning",
          visible: true
        };
    }
}