export const getHouseColor = (house) => {
  switch (house) {
    case "Gryffindor":
      return "#ae0001";
    case "Slytherin":
      return "#2a623d";
    case "Hufflepuff":
      return "#ffdb00";
    case "Ravenclaw":
      return "#222f5b";
    default:
      return "#bebebe";
  }
};

export const getPotionDifficultyColor = (difficulty) => {
  switch (true) {
    case /beginner/i.test(difficulty):
      return "#7DC44F";
    case /ordinary/i.test(difficulty):
      return "#D0C13A";
    case /moderate/i.test(difficulty):
      return "#DB6E3B";
    case /advanced/i.test(difficulty):
      return "#801C1C";
    default:
      return "transparent";
  }
};

export const getDatabaseStatus = async () => {
  return await fetch(`${getApiUrl()}/status`)
    .then((response) => response.status)
    .catch((error) => {
      if (error.response) {
        return error.response.status;
      }
      return 503;
    });
};

export const getApiUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL || "https://api.potterdb.com";
};

export const getGithubUrl = () => {
  return "https://github.com/danielschuster-muc/potter-db";
};
