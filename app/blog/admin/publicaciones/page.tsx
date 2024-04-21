import { Button } from '@/ui/elements/button'

const AdminPostsLandingPage = (): JSX.Element => {
  return (
    <div className="inline-flex gap-4 items-center">
      <span className="icon-[tabler--article] size-6" />
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Publicaciones
      </h3>
      <Button variant="outline">
        Nueva publicación
      </Button>
    </div>
  )
}

export default AdminPostsLandingPage
