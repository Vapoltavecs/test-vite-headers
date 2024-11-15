import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const myPlugin = () => ({
  name: "configure-server",
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      if (req.originalUrl.endsWith(".gz")) {
        res.setHeader("Content-Encoding", "gzip");
      }
      next();
    });
  },
});
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), myPlugin()],
});
