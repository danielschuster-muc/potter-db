import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";

import { faWandSparkles } from "@fortawesome/free-solid-svg-icons";

import Link from '../../Link'
import ListItemBox from '../../ui/ListItemBox'


const SpellListItem = ({ spell }) => {
  const { name, slug, effect, hand, incantation, category, light, creator, image, wiki } = spell.attributes;
  
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '3px solid',
        justifyContent: 'space-between'
      }}>
        <CardMedia>
          <Image
            as='image'
            src={image || '/images/missing_image.jpg'}
            alt={`Picture of ${name}`}
            width='100%'
            height='100%'
            layout="responsive"
            objectFit="scale-down"
            quality={30}
            loading='eager'
            priority
          />
        </CardMedia>
        <CardHeader title={name} />
        <CardContent>
          <ListItemBox value={incantation?.split(' (')[0]} icon={faWandSparkles} />
        </CardContent>
        <CardActions>
          <Link href={`/spells/${slug}`}>
            <Typography sx={{ ml: 1}}>Detailed Spell Information</Typography>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )

}


export default SpellListItem;