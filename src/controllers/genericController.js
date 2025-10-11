// src/controllers/genericController.js
function createController(service) {
  return {
    //  GET all
    getAll: async (req, res) => {
      try {
        const data = await service.getAll();
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    // GET by ID
    getById: async (req, res) => {
      try {
        const data = await service.getById(req.params.id);
        if (!data) return res.status(404).json({ error: 'Not found' });
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    // CREATE
    create: async (req, res) => {
      try {
        const data = await service.create(req.body);
        res.status(201).json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    //  UPDATE
    update: async (req, res) => {
      try {
        const data = await service.update(req.params.id, req.body);
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

    //  DELETE
    remove: async (req, res) => {
      try {
        await service.remove(req.params.id);
        res.status(204).send();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  };
}

module.exports = { createController };
