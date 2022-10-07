import Meta from "../../../../Meta";

const SingleCharacterMeta = ({ attributes }) => {
  const getMetaDescription = () => {
    let description = [];
    if (attributes.born) {
      description.push(`Born: ${attributes.born}`);
    }

    if (attributes.died) {
      description.push(`Died: ${attributes.died}`);
    }

    if (attributes.species) {
      description.push(`Species: ${attributes.species}`);
    }

    if (attributes.gender) {
      description.push(`Gender: ${attributes.gender}`);
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

export default SingleCharacterMeta;
