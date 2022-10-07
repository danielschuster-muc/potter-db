import { Grid } from '@mui/material'

import DetailInfoCard from '../../../ui/DetailedInfoCard';
import { getSpellColor } from '../../../../lib/utils';

const SpellDetails = ({ attributes, apiLink }) => {
  const { name, slug, effect, hand, incantation, category, light, creator, image, wiki } = attributes;

  const informationTable = [
    {
      name: 'name',
      value: name,
    },
    {
      name: 'incantation',
      value: incantation,
    },
    {
      name: 'Effect',
      value: effect,
    },
    {
      name: 'Category',
      value: category,
    },
    {
      name: 'Light',
      value: light,
    },
    {
      name: 'Hand',
      value: hand,
    },
    {
      name: 'Creator',
      value: creator,
    },
  ];

  return (
    <>
    <Grid container spacing={3} justifyContent='center'>
      <Grid item xs={12} md={6}>
        <DetailInfoCard
          title={name}
          slug={slug}
          image={image}
          tableData={informationTable}
          color={getSpellColor(light)}
          links={[
            { title: 'Wiki', value: wiki },
            { title: 'API', value: apiLink },
          ]}
        />
      </Grid>
    </Grid>
    </>
  )
} 

export default SpellDetails;