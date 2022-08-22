import express from "express"

import { getToDo, saveToDo, deleteToDo, updateToDo }  from "../controller/todoController.js"

const router = express.Router()

router.get("/get-todo", getToDo);

router.post("/save-todo", saveToDo);

router.post("/delete-todo", deleteToDo);

router.post("/update-todo", updateToDo);

export default router