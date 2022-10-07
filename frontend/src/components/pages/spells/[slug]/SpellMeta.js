import Meta from "../../../Meta";

const SingleSpellMeta = ({ attributes}) => {
  const getMetaDescription = () => {
    let description = [];
    
    if(attributes.name) {
      description.push(`Name: ${attributes.name}`);
    }

    if(attributes.category) {
      description.push(`Category: ${attributes.category}`);
    }

    if(attributes.creator) {
      description.push(`Creator: ${attributes.creator}`);
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

export default SingleSpellMeta
