const { Router } = require("express");

const {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers,
} = require("../controllers/users")

const router = Router()

router.get("/", getUsers);
router.post("/", createUsers);
router.patch("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;