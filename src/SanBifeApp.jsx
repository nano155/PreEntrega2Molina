
import { AppRouter } from "./routes/AppRouter"
import { SanBifeProvider } from "./sanbife/context/SanBifeProvider"



export const SanBifeApp = () => {
  return (
    <SanBifeProvider>
      <AppRouter/>
    </SanBifeProvider>
  )
}
