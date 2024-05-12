import express from "express";
import {
  getAllEvents,
  // getOneContact,
  // deleteContact,
  // createContact,
  // updateContact,
} from "../controllers/eventsControllers.js";

const eventsRouter = express.Router();

eventsRouter.get("/", getAllEvents);

// contactsRouter.get("/:id", getOneContact);

// contactsRouter.delete("/:id", deleteContact);

// contactsRouter.post("/", createContact);

// contactsRouter.put("/:id", updateContact);

export default eventsRouter;
