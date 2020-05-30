import express = require("express");
import CategoryService from "../services/categories";

const categoryRouter = express.Router();

categoryRouter.get("/", (req, res) => {
    const userId = res.locals.userId;
    CategoryService
        .getCategoriesbyUserId(userId)
        .then(categories => res.send(categories))
        .catch(err => res.status(400).send({
            errors: [String(err)]
        }))
});

categoryRouter.post("/", (req, res) => {
    const userId = res.locals.userId;
    const name = req.body.name;
    CategoryService
        .create(name, userId)
        .then(result => res.send(result))
        .catch(err => res.status(400).send({
            errors: [String(err)]
        }))
});

categoryRouter.delete("/:categoryId", (req, res) => {
    const { categoryId } = req.params;
    CategoryService
        .delete(categoryId)
        .then(result => res.send(result))
        .catch(err => res.status(400).send({
            errors: [String(err)]
        }))
});

export default categoryRouter;
