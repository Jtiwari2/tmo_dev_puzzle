import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addToReadingList, finishedBookReadingList, getReadingList, removeFromReadingList } from '@tmo/books/data-access';

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


  //Finish reading
  finishedBookFromReadingList(item) {
    this.store.dispatch(finishedBookReadingList({ item }));
  }


  // Open Snack Bar
  promptUndoAction(item) {
    let snackBarRef = this.snackBar.open('Removed', 'Undo', { duration: 3000 });
    snackBarRef.afterDismissed().subscribe((data) => {
      if (data.dismissedByAction === true) {
        console.log('removing data ------->', data);
        this.store.dispatch(addToReadingList({book: item}));
      }
    });
  }
}
