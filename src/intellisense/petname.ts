import { getConfiguration } from '../utils'
import { generate } from '../petname'

export function petname() {
  const config = getConfiguration()
  const petname = generate(config.words, config.separator)
  return petname
}
