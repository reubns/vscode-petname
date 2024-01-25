import { describe, expect, it } from 'vitest'
import { generate } from '../src/petname/generate'

describe('generate', () => {
  it('throw an error when words < 1', () => {
    expect(() => generate(0)).toThrow()
  })

  it('returns a single petname when words = 1', () => {
    expect(generate(1)).toMatch(/[a-z]+/)
  })

  it('returns a petname with two words when words = 2', () => {
    expect(generate(2)).toMatch(/[a-z]+-[a-z]+/)
  })

  it('uses the separator', () => {
    expect(generate(2, '.')).toMatch(/[a-z]+\.[a-z]+/)
  })
})
