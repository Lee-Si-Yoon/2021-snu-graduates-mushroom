import "regenerator-runtime";
import "dotenv/config";
import app from "./server";

const PORT = process.env.PORT || 4000;

const handleListen = () =>
  console.log(`✅ Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListen);
