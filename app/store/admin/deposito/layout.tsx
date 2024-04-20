import { type PropsWithChildren } from 'react'
import BodegaNavbar from './ui/navbar'

const BodegaLayout = ({ children }: PropsWithChildren): JSX.Element => (
  <>
    <BodegaNavbar />
    {children}
  </>
)

export default BodegaLayout
