import express, { Router } from "express";
import fs from "fs";

const router: Router = Router();
export default router;

router.use("/api", (await import("@/routes/api")).default);

const clientDist = fs.existsSync("apps/frontend/dist");

if (clientDist) {
  router.use(express.static("apps/frontend/dist"));
}

router.get("/", (req, res) => {
  if (clientDist) {
    return res.sendFile("index.html", { root: "apps/frontend/dist" });
  }

  res.send({
    message: "Client not built yet.",
  });
});

router.use((req, res) => {
  res.status(404).send("Not Found");
});
