import type { FC } from "react";
import { Tabs, TabsList, TabsTrigger } from "../elements/tabs";

export const NavMenu: FC = () => {
  return (
    <Tabs defaultValue="top">
      <TabsList>
        <TabsTrigger value="top" asChild>
          <a href="#top">Spotlight</a>
        </TabsTrigger>
        <TabsTrigger value="experiencia" asChild>
          <a href="#experiencia">Experiencia</a>
        </TabsTrigger>
        <TabsTrigger value="sobreMi" asChild>
          <a href="#sobreMi">Sobre Mí</a>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
