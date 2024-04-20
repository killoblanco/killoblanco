import { type PropsWithChildren } from 'react'
import OrdenesNavbar from './ui/navbar'

const OrdenesLayout = ({ children }: PropsWithChildren): JSX.Element => (
  <>
    <OrdenesNavbar />
    {children}
  </>
)

export default OrdenesLayout
