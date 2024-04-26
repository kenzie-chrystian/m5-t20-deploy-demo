import app from "./app";
import { initApp } from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Application is running on port: ${PORT}`);

  initApp();
});
