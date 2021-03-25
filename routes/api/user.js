const express = require("express");
const router = express.Router();
const db = require("../../database");

router.get("/", async (req, res) => {
  const user = await db.select().from("users").orderBy("id");
  res.render("index", { user });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/", async (req, res) => {
  const user = await db.insert(req.body).returning("*").into("users");
  res.redirect("/api/user");
});

router.get("/:id", async (req, res) => {
  const [user] = await db("users").where({ id: req.params.id }).select();
  res.render("show", { user });
});

router.get("/:id/edit", async (req, res) => {
  const [user] = await db("users").where({ id: req.params.id }).select();
  res.render("edit", { user });
});

router.put("/:id", async (req, res) => {
  const [user] = await db("users")
    .where({ id: req.params.id })
    .update(req.body)
    .returning("*");
  res.redirect(`/api/user`);
});

router.delete("/:id", async (req, res) => {
  const user = await db("users").where({ id: req.params.id }).del();
  res.redirect("/api/user");
});

module.exports = router;
