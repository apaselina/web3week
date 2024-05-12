const sendAllGames = async (req, res) => {
  res.send(req.games);
};

const sendUpdatedGames = async (req, res) => {
  res.send({
    games: req.games,
    updated: req.game
  });
}

const addGameController = async (req, res) => {
  res.send({
    games: req.games, // Обновлённый список со всеми играми
    updated: req.updatedObject // Новая добавленная игра
  });
}

module.exports = {
  sendAllGames, sendUpdatedGames, addGameController
}