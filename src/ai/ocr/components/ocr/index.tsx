import type { FC } from 'react';
import { Empty } from './empty';
import { Preview } from './preview';
import { Loading } from './loading';
import { Data } from './results';
interface Props {

  onRecognize: () => Promise<void>
  image: File | null
  isLoading: boolean
  data: any | null
  onReset: () => void
}

export const Results: FC<Props> = ({ onRecognize, image, isLoading, data, onReset }) => {
  let content = <Empty />;

  if (image != null) content = <Preview image={image} onRecognize={onRecognize} />

  if (isLoading) content = <Loading />

  if (data != null) content = <Data data={data} onReset={onReset} />

  return (
    <section className="card w-full bg-base-300 h-full">
      <div className="card-body p-4 md:p-8 justify-center items-center gap-3 md:gap-6">
        {content}
      </div>
    </section>
  )
}
