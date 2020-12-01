import { Box, Container, makeStyles, Typography } from '@material-ui/core'

import Head from 'next/head'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Head>
        <title>Inicio</title>
      </Head>
      <Container maxWidth={false}>
        <Box
          mt={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          alignContent="center"
        ></Box>
        <Typography variant="h4" align="center">
          Bem Vindo Ao Seu Painel de Administrador
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary">
          Use A Barra Lateral Para Navegar
        </Typography>
      </Container>
    </Box>
  )
}

export default Home
