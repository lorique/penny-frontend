import { PennyService } from './penny.service'

export const createPennyService = (): PennyService => {
  const penny = new PennyService(
    process.env.PENNY_URL ?? 'http://localhost:3001/api/v1'
  )

  return penny
}
