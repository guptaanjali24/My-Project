export const genericController = (service, table, idField) => ({
  async getAll(req, res) {
    try {
      const data = await service.getAll(table);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const data = await service.getById(table, req.params.id, idField);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const data = await service.create(table, req.body);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const data = await service.update(table, req.params.id, req.body, idField);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const data = await service.remove(table, req.params.id, idField);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
});
