import { workspace } from 'vscode'
import type { PetnameConfiguration } from '../types'

export function getConfiguration() {
  const config = workspace.getConfiguration('petname')
  return config as unknown as PetnameConfiguration
}
