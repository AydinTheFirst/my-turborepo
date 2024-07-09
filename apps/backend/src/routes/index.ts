import express, { Router } from "express";
import config from "@/config";
import fs from "fs";

const router: Router = Router();
export default router;

router.use("/api", (await import("@/routes/api")).default);

router.use(express.static(config.clientDist));

router.use((req, res) => {
  if (!fs.existsSync(config.clientDist)) {
    return res.status(404).send("Client dist not found.");
  }

  res.sendFile("index.html", { root: config.clientDist });
});
