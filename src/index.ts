import type { ExtensionContext } from 'vscode'
import { activateExtensionAsync } from './extension'

export async function activate(context: ExtensionContext) {
  activateExtensionAsync(context)
}
