import { Avatar, AvatarFallback, AvatarImage } from '@/ui/elements/avatar'
import Image from 'next/image'

const Thumbnail = (): JSX.Element => (
  <Avatar className="size-64">
    <AvatarImage src="/me.avif" alt="@killoblanco" />
    <AvatarFallback>
      <Image src="/avatar.webp" alt="Kamilo Vasquez" width={92} height={92} />
    </AvatarFallback>
  </Avatar>
)

export default Thumbnail
