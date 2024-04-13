import { Avatar, AvatarImage } from "@/ui/elements/avatar"
import { Card, CardContent } from "@/ui/elements/card"
import { cn } from "@/ui/utils"
import styles from './experience.module.css'

type Props = {
  companyName: string,
  from: string,
  position: string,
  to: string,
  thumbnail: string,
  type: 'globant' | 'disney',
}

const ExperienceHighlight = ({ companyName, from, position, to, thumbnail, type }: Props) => (
  <Card className={cn(
    "bg-cover bg-center p-4 md:p-6",
    type === 'disney' && "bg-disney-200 border-disney-600 text-disney-950",
    type === 'globant' && "bg-globant-200 border-globant-600 text-globant-950",
    styles[type]
  )}>
    <CardContent className="p-0 pt-4 flex flex-col items-start justify-end gap-2">
      <Avatar className="size-16 rounded-lg">
        <AvatarImage src={thumbnail} alt={companyName} />
      </Avatar>
      <h4 className={cn(
        "scroll-m-20 text-2xl font-bold tracking-tight",
        type === 'disney' && "text-disney-600",
        type === 'globant' && "text-globant-600",
      )}>
        {companyName}
      </h4>
      <p className="text-xl">{position} </p>
      <div className="inline-flex items-center gap-2">
        <span className="icon-[tabler--calendar] size-5" />
        <p className="leading-7">
          {`${to} - `}
          <span className="text-sm leading-none">{from}</span>
        </p>
      </div>
    </CardContent>
  </Card>
)

export default ExperienceHighlight
