import type { FC, PropsWithChildren } from 'react';
import { FileUpload } from './components/file-upload';
import { Results } from './components/ocr';
import { useTesseractOCR } from './hook';

const OCR: FC<PropsWithChildren> = ({ children }) => {
  const ocr = useTesseractOCR();

  return (
    <main
      className="container mx-auto px-8 pt-16 grid grid-cols-1 grid-rows-[auto_1fr] gap-16 h-screen"
    >
      <aside>
        <FileUpload
          onImgLoad={ocr.loadImage}
          onReset={ocr.reset}
          lang={ocr.lang}
          onLangChange={ocr.changeLang}
        />
      </aside>
      <section>
        <Results
          onRecognize={ocr.recognize}
          image={ocr.image}
          isLoading={ocr.isLoading}
          data={ocr.result}
          onReset={ocr.reset}
        />
      </section>
      {children}
    </main>
  )
}

export default OCR
