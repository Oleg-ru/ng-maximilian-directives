import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSaveLink]',
})
export class SaveLinkDirective {
  constructor() {
    console.log('Safe link directive is activated')
  }
}
