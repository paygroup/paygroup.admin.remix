import { Grid } from "@chakra-ui/react";

export const PartnerGrid = ({ children }: React.PropsWithChildren) => (
  <Grid
    px="4"
    flex={1}
    templateAreas="
      'stats info'
      'main   info'
    "
    rowGap="20"
    columnGap={8}
    templateColumns="1fr 30%"
    templateRows="30px 1fr"
  >
    {children}
  </Grid>
);
