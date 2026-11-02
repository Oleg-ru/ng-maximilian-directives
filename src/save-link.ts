import {Directive, input} from '@angular/core';

@Directive({
  selector: 'a[appSaveLink]',
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SaveLinkDirective {
  queryParam = input('myapp', {alias: 'appSafeLink'})

  constructor() {
    console.log('Safe link directive is activated')
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + `?from=${this.queryParam()}`
      return;
    } else {
      event?.preventDefault();
    }
  }
}
