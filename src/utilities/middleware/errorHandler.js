const errorHandler = (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
  
    if (err.name === 'CastError') {
      // Vérifie si un ID est présent avant de vérifier si l'ID est valide
      if (err.path === '_id' && req.params.id === undefined) {
        return res.status(400).json({ error: 'ID is missing' });
      }
      return res.status(400).json({ error: 'Invalid ID' });
    }
  
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  module.exports = errorHandler;
  