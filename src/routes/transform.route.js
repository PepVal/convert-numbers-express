import { Router } from "express";
import {
  transformDecimal,
  transformBinary,
  transformOctal,
  transformHex,
} from "../controllers/transform.controller";

const router = new Router();
// routes api
router.get("/decimal/:number", transformDecimal);
router.get("/binario/:number", transformBinary);
router.get("/octal/:number", transformOctal);
router.get("/hex/:number", transformHex);

export default router;
