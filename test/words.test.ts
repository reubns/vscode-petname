import { describe, expect, it } from 'vitest'
import words from '../src/words'

describe('words', () => {
  const allWords = [...words.adjectives, ...words.adverbs, ...words.names]

  it.each(allWords)('words are only a-z, with no upper case', (word) => {
    expect(word).toMatch(/^[a-z]+$/)
  })

  it.each(allWords)('words are not repeated', (word) => {
    expect(allWords.filter(w => w === word).length).toBe(1)
  })

  it.each(words.adjectives)('adjectives are a maximum of 12 characters long', (word) => {
    expect(word.length).toBeLessThanOrEqual(12)
  })

  it.each(words.names)('names are a maximum of 12 characters long', (word) => {
    expect(word.length).toBeLessThanOrEqual(12)
  })

  it.each(words.adverbs)('adverbs are a maximum of 14 characters long', (word) => {
    expect(word.length).toBeLessThanOrEqual(14)
  })

  it.each(words.adverbs)('adverbs always end in -ly', (word) => {
    expect(word).toMatch(/ly$/)
  })
})
