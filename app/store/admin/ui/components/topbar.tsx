import { AppBar } from '@/ui/elements/appbar'
import { ModeToggle } from '@/ui/mode-toggle'
import { AdminBtnSearch } from './btn-search'
import { AdminNavbar } from './navbar'

export const AdminTopbar = (): JSX.Element => (
  <AppBar>
    <div className="inline-flex items-center gap-4">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Tienda
      </h4>
      <AdminNavbar />
    </div>
    <div className="inline-flex items-center gap-4">
      <AdminBtnSearch />
      <ModeToggle />
    </div>
  </AppBar>
)
