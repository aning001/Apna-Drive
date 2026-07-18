import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Enable JSON and URL-encoded parsing if needed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the root directory
// This maps index.html, fleet.html, about.html, etc., and subfolders (cars/, services/, locations/, blog/, css/, js/, images/)
app.use(express.static(path.join(process.cwd())));

// 404 Fallback - Serve custom 404.html for any unmatched routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(process.cwd(), "404.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Apna Drive Server is running on http://localhost:${PORT}`);
});
