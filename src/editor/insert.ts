import { Position, Selection, window } from 'vscode'

export function insert(content: string) {
  const editor = window.activeTextEditor

  if (!editor) {
    window.showErrorMessage('No active editor')
    return
  }

  const advancedSelections: Selection[] = []
  editor
    .edit((builder) => {
      editor.selections.forEach((selection) => {
        builder.replace(selection, content)
        advancedSelections.push(getAdvancedSelection(selection, content))
      })
    }).then(() => {
      editor.selections = advancedSelections
    })
};

function getAdvancedSelection(selection: Selection, content: string) {
  const end = new Position(selection.start.line, selection.start.character + content.length)
  return new Selection(end, end)
}
