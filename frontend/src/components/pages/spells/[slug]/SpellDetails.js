import { Grid } from '@mui/material'

import AccordionList from '../../../ui/AccordionList';
import DetailInfoCard from '../../../ui/DetailedInfoCard';


const SpellDetails = ({ attributes, apiLink }) => {
  const { name, slug, effect, hand, incantation, category, light, creator, image, wiki } = attributes;

  const accordions = [
    {
      name: 'Effect',
      value: effect,
    },
    {
      name: 'Hand',
      value: hand,
    },
    {
      name: 'Category',
      value: category,
    }
  ];

  const informationTable = [
    {
      name: 'name',
      value: name,
    },
    {
      name: 'Incantation',
      value: incantation,
    },
    {
      name: 'light',
      value: light,
    },
    {
      name: 'creator',
      value: creator,
    },
  ]

  return (
    <>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <DetailInfoCard
          title={name}
          slug={slug}
          image={image}
          tableData={informationTable}
          links={[
            { title: 'Wiki', value: wiki },
            { title: 'API', value: apiLink },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <AccordionList accordions={accordions} />
      </Grid>

    </Grid>
    </>
  )
} 

export default SpellDetails;