import { Router, Request, Response } from "express";
import { animalsService } from "../services/animals.service";
import { randomInt } from "crypto";

export const animalsRoute = Router();
let numberButton = 0; // 1, 2 or 3 (bc the is 3 buttons)

const animals = [
    {},
    {},
    {}
]

animalsRoute.get("/", (req: Request, res: Response) => {
    const treeAnimals = animalsService.getHazardAnimals();

    numberButton = Math.floor(Math.random() * 3) + 1;

    return res.json();
});


animalsRoute.post("/:idButton", (req, res) => {
    const idButton = req.params.idButton;

    return res.status(200)
})

