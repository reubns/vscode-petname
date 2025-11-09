import type { PetnameConfiguration } from '../types'
import { workspace } from 'vscode'

export function getConfiguration() {
  const config = workspace.getConfiguration('petname')
  return config as unknown as PetnameConfiguration
}
