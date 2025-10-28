import { Router, Request, Response } from "express";
import { animalsService } from "../services/animals.service";
import { randomInt } from "crypto";

export const animalsRoute = Router();
let numberSelected = 0; // 1, 2 or 3 (bc the is 3 buttons)

animalsRoute.get("/", (req: Request, res: Response) => {
    console.log("<Infos> Request: GET; From: / route")
    const treeAnimals = animalsService.getHazardAnimals();

    return res.status(200).json(treeAnimals);
});


animalsRoute.get("/:idButton", (req: Request, res: Response) => {
    console.log("<Infos> Request: GET; From: /:idButton route")
    const idButton = req.params.idButton;

    return res.status(200).send(idButton);
})

