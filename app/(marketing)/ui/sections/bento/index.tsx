import ChatAi from './chat-ai'
import Games from './games'

const BentoShow = (): JSX.Element => (
  <div className="grid grid-cols-4 grid-rows-6 gap-8">
    <ChatAi />
    <Games />
  </div>
)

export default BentoShow
