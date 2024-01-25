import * as crypto from 'node:crypto'
import words from '../words'

function adjective() {
  return words.adjectives[crypto.randomInt(words.adjectives.length)]
}

function adverb() {
  return words.adverbs[crypto.randomInt(words.adverbs.length)]
}

function name() {
  return words.names[crypto.randomInt(words.names.length)]
}

export function generate(words = 2, separator = '-') {
  if (words < 1)
    throw new Error('Words must be greater than 0')

  if (words === 1)
    return name()

  if (words === 2)
    return adjective() + separator + name()

  const petname = []
  for (let i = 0; i < words - 2; i++)
    petname.push(adverb())

  petname.push(adjective(), name())
  return petname.join(separator)
}
