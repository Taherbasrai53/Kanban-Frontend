import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-board';

  pending = [{ content: 'Card 1' }, { content: 'Card 2' }];
  inProgress = [{ content: 'Card 3' }];
  completed = [{ content: 'Card 4' }];

  onDrop(event: CdkDragDrop<any[]>) {
    const previousIndex = event.container.data.findIndex((currentItem) => currentItem === event.item.data);
    
    const currentIndex = event.currentIndex;

    
    if (event.container === event.item.dropContainer) {
      event.container.data.splice(previousIndex, 1);
      event.container.data.splice(currentIndex, 0, event.item.data);
    } else {
      
      event.container.data.splice(currentIndex, 0, event.item.data);
    }
  }
}
