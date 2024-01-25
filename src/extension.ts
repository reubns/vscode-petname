import type { ExtensionContext } from 'vscode'
import { commands, languages } from 'vscode'
import petnameCommands from './commands'
import petnameCompletions from './intellisense'

const commandList = [
  { command: 'petname.generate', function: petnameCommands.petname },
]

const completionList = [
  { label: 'petname', function: petnameCompletions.petname, documentation: 'Generate a random pet name', pattern: '**/*' },
]

export async function activateExtensionAsync(context: ExtensionContext) {
  commandList.forEach(({ command, function: func }) => {
    context.subscriptions.push(commands.registerCommand(command, func))
  })

  completionList.forEach(({ label, function: func, documentation, pattern }) => {
    context.subscriptions.push(languages.registerCompletionItemProvider({ pattern }, {
      provideCompletionItems() {
        return [
          {
            label,
            insertText: func(),
            documentation,
          },
        ]
      },
    }))
  })
}
