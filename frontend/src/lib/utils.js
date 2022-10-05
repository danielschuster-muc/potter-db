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
