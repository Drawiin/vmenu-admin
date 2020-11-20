import Link from 'next/link'
import Button from '@material-ui/core/Button'

export default function Home(): JSX.Element {
  return (
    <Link href="Products">
      <Button>Ir para produtos</Button>
    </Link>
  )
}
