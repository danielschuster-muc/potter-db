import Meta from "../../../Meta";

const SinglePotionMeta = ({ attributes }) => {
  const getMetaDescription = () => {
    let description = [];

    if (attributes.difficulty) {
      description.push(`Difficulty: ${attributes.difficulty}`);
    }

    if (attributes.inventors) {
      description.push(`Inventors: ${attributes.inventors}`);
    }

    if (attributes.effect) {
      description.push(`Effect: ${attributes.effect}`);
    }

    if (attributes.side_effects) {
      description.push(`Side Effect: ${attributes.side_effects}`);
    }

    return description.join(" - ");
  };

  return (
    <Meta
      title={attributes.name}
      description={getMetaDescription()}
      image={attributes.image}
    />
  );
};

export default SinglePotionMeta;
