import { insert } from '../editor'
import { generate } from '../petname'
import { getConfiguration } from '../utils'

export function petname() {
  const config = getConfiguration()
  const petname = generate(config.words, config.separator)
  insert(petname)
}
