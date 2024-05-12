// import contactsService from "../services/eventsServices.js";

export const getAllEvents = async (req, res) => {
    const result = await find();
    res.json(result)
};

// export const getOneContact = (req, res) => {};

// export const deleteContact = (req, res) => {};

// export const createContact = (req, res) => {};

// export const updateContact = (req, res) => {};
