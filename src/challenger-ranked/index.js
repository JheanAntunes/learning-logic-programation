const rankingList = [
  { wins: 10, rank: "Ferro" },
  { wins: 20, rank: "Bronze" },
  { wins: 50, rank: "Prata" },
  { wins: 80, rank: "Ouro" },
  { wins: 90, rank: "Diamante" },
  { wins: 100, rank: "Lendário" },
  { wins: Number.MAX_SAFE_INTEGER, rank: "Imortal" },
];

const rankingCalculator = (wins, losses) => wins - losses;

const rankingUser = (wins, losses) => {
  const userWins = rankingCalculator(wins, losses);
  const userRank = rankingList.find((item) => userWins <= item.wins);
  console.log("Seu rank é:", userRank.rank);
};

// Exemplos de uso
rankingUser(85, 10); // Seu rank é: Ouro
rankingUser(100, 5); // Seu rank é: Lendário
