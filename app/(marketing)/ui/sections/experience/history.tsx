'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/ui/elements/avatar'
import { Button } from '@/ui/elements/button'
import { Card } from '@/ui/elements/card'
import { CollapsibleContent, CollapsibleTrigger } from '@/ui/elements/collapsible'
import { cn } from '@/ui/utils'
import { Collapsible } from '@radix-ui/react-collapsible'
import { useState } from 'react'

interface ListItemProps {
  companyName: string
  from: string
  position: string
  to: string
  thumbnail?: string
  highlights?: string[]
}

const ListItem = (item: ListItemProps): JSX.Element => (
  <Card className="w-full grid md:grid-cols-2 gap-8 p-4">
    <div className="grid gap-6 grid-cols-[auto_1fr]">
      <Avatar className="size-20 rounded-lg">
        <AvatarImage src={item.thumbnail} alt={item.companyName} />
        <AvatarFallback>
          <span className="icon-[tabler--building-skyscraper] size-8" />
        </AvatarFallback>
      </Avatar>
      <div className="space-y-1.5">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {item.companyName}
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{item.position} </p>
        <div className="inline-flex items-center gap-2">
          <span className="icon-[tabler--calendar] size-5" />
          <p className="leading-7">
            {`${item.to} - `}
            <span className="text-sm leading-none">{item.from}</span>
          </p>
        </div>
      </div>
    </div>
    {item.highlights != null && (
      <div className="space-y-1.5">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight inline-flex">
          <span className="icon-[tabler--medal] size-7 mr-2" />
          Destacados:
        </h4>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {(item.highlights ?? []).map((highlight) => (
            <li key={globalThis.crypto.randomUUID()}>{highlight}</li>
          ))}
        </ul>
      </div>
    )}
  </Card>
)

const ExperienceHistory = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
      <div className="flex items-center gap-4">
        <hr className="flex-1" />
        <CollapsibleTrigger asChild>
          <Button size="sm" variant="outline">
            {`Ver ${isOpen ? 'menos' : 'más'}`}
            <span className={cn('size-5 ml-2', isOpen ? 'icon-[tabler--chevron-up]' : 'icon-[tabler--chevron-down]')} />
          </Button>
        </CollapsibleTrigger>
        <hr className="flex-1" />
      </div>
      <CollapsibleContent className="space-y-4">
        <ListItem
          companyName="Empower Retirement"
          from="Abril 2022"
          position="Desarrollador Frontend"
          to="Junio 2022"
          thumbnail="/assets/empowertoday_logo.jpg"
          highlights={[
            'Brindé soporte a la plataforma y mejoré la accesibilidad del sitio web debido a nuevas leyes en EE. UU.'
          ]}
        />
        <ListItem
          companyName="Stanley Black & Decker"
          from="Agosto 2019"
          position="Desarrollador Frontend"
          to="Marzo 2022"
          thumbnail="/assets/black_n_decker_logo.jpg"
          highlights={[
            'Colaboré en la creación de un sistema de administración de herramientas capaces de interactuar con la web mediante Bluetooth, incluyendo la ubicación geográfica de las herramientas registradas.',
            'Diseñé un sistema para gestionar promociones y/o eventos de la marca.'
          ]}
        />
        <ListItem
          companyName="Quantcast"
          from="Febrero 2019"
          position="Desarrollador Frontend"
          to="Agosto 2022"
          thumbnail="/assets/quantcast_logo.jpg"
          highlights={[
            'Contribuí al desarrollo de un script que carga el consentimiento de cookies, incluyendo su apariencia y personalización.'
          ]}
        />
        <ListItem
          companyName="Banco Davivienda"
          from="Agosto 2018"
          position="Desarrollador Frontend"
          to="Enero 2019"
          thumbnail="/assets/davivienda_logo.jpg"
          highlights={[
            'Lideré el equipo de frontend en la creación de una PWA que agiliza el proceso de solicitud de créditos para pequeñas empresas, así como el seguimiento del flujo de caja de los negocios.'
          ]}
        />
        <ListItem
          companyName="Soft Dev Team"
          from="Agosto 2017"
          position="Desarrollador Fullstack"
          to="Julio 2018"
          thumbnail="/assets/agiledreamteam_logo.jpg"
          highlights={[
            'Participé en la creación de un sistema de gestión documental escrito en React.js con MongoDB.'
          ]}
        />
        <ListItem
          companyName="Optime Consulting"
          from="Abril 2015"
          position="Desarrollador Backend"
          to="Mayo 2017"
          thumbnail="/assets/optime_consulting_logo.jpg"
          highlights={[
            'Optimicé un proceso de descarga de archivos que solía llevar alrededor de 45 minutos a tan solo 10 segundos utilizando un servicio dedicado escrito en Python.',
            'Colaboré en la implementación de SASS como compilador de CSS para las plataformas.',
            'Creé un diccionario de datos para automatizar procesos dentro de las plataformas utilizando Vue JS y PHP Symphony.'
          ]}
        />
        <ListItem
          companyName="LOMA Management"
          from="Diciembre 2012"
          position="Desarrollador Fullstack"
          to="Marzo 2015"
          thumbnail="/assets/loma_logo.jpg"
          highlights={[
            'Contribuí a la creación y mantenimiento de una plataforma de gestion de metales preciosos.',
            'Implementé gráficos relacionados con el movimiento de acciones.',
            'Desarrollé una simulación de comunicación en tiempo real para actualizar los precios de acciones de metales preciosos.'
          ]}
        />
        <ListItem
          companyName="Freelance"
          from="2010"
          position="Desarrollador Fullstack"
          to="Noviembre 2012"
        />
      </CollapsibleContent>
    </Collapsible>
  )
}

export default ExperienceHistory
