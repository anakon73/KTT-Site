import { z } from 'zod'

export const dateValidation = z.preprocess(
  arg => (typeof arg === 'string' ? new Date(arg) : arg),
  z.date(),
) as z.ZodEffects<z.ZodDate, Date>
