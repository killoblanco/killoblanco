import Image from 'next/image';
import Link from 'next/link';

const PageFooter = () => (
  <footer className="border-t border-t-border py-8 flex flex-col md:flex-row gap-4 items-center justify-between">
    <Link href="#top" className="inline-flex gap-1 items-center text-sm text-muted-foreground">
      <Image src="/avatar.webp" alt="Avatar" width={32} height={32} />
      <span>Volver Arriba</span>
      <span className="icon-[tabler--arrow-narrow-up] animate-bounce size-4" />
    </Link>
    <p className="text-sm text-muted-foreground inline-flex gap-1 items-center">
      <span>Hecho con</span>
      <span className="icon-[fluent-emoji--smiling-face-with-hearts] size-4" />
      <span className="sr-only">Amor</span>
      <span>y</span>
      <span className="icon-[fluent-emoji--hot-beverage] size-4" />
      <span className="sr-only">Café</span>
      <span>por</span>
      <span className="font-medium">@killoblanco</span>
    </p>
  </footer>
)
export default PageFooter;
