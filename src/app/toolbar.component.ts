import { Component, Input } from '@angular/core';

type EditorAction =
  | 'heading'
  | 'bold'
  | 'italic'
  | 'bulletList'
  | 'orderedList'
  | 'clear';

interface ToolConfig {
  action: EditorAction;
  options?: unknown;
  icon: string;
  title: string;
}


@Component({
  selector: 'app-toolbar',
  template: `<div
      class="texteditor-toolbar"
      role="toolbar"
      aria-orientation="horizontal"
    >
      <ng-container *ngFor="let tool of toolbar; let i = index">
        <button
          class="texteditor-toolbar-action"
          [title]="tool.title"
          tabindex="-1"
        >
          {{ tool.icon }}
        </button>
      </ng-container>
    </div>`,
})
export default class ToolbarComponent {
  public toolbar: ToolConfig[] = [
    {
      action: 'heading',
      options: { level: 1 },
      icon: 'heading1',
      title: 'Heading 1',
    },
    {
      action: 'heading',
      options: { level: 2 },
      icon: 'heading2',
      title: 'Heading 2',
    },
  ];
}
