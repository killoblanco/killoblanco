import { ModeToggle } from "@/ui/mode-toggle";
import AdminBtnSearch from "./btn-search";
import AdminNavbar from "./navbar";

const AdminTopbar = () => (
  <header className="flex items-center justify-between p-2 bg-zinc-100/40 dark:bg-zinc-900/40 backdrop-blur-sm rounded-lg">
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
  </header>
)

export default AdminTopbar;
