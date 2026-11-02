import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSaveLink]',
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SaveLinkDirective {
  constructor() {
    console.log('Safe link directive is activated')
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      return;
    } else {
      event?.preventDefault();
    }
  }
}
