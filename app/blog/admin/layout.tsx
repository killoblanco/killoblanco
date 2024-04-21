import PageFooter from '@/app/(marketing)/ui/components/page-footer'
import { type PropsWithChildren } from 'react'
import { AdminTopBar } from './ui/topbar'

const AdminLayout = ({ children }: PropsWithChildren): JSX.Element => (
  <main className="container py-4 space-y-4" id="top">
    <AdminTopBar />
    {children}
    <PageFooter />
  </main>
)

export default AdminLayout
