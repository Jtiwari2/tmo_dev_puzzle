import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addToReadingList, getReadingList, removeFromReadingList } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store,private readonly snackBar:MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.promptUndoAction(item);
  }


  // Open Snack Bar
  promptUndoAction(item) {
    const snackBarRef = this.snackBar.open('Removed', 'Undo', { duration: 3000 });
    snackBarRef.afterDismissed().subscribe((data) => {
      if (data.dismissedByAction === true) {
        this.store.dispatch(addToReadingList({book: item}));
      }
    });
  }
}
