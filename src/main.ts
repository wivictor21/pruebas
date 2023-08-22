import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*
function myError(err){
  console.error(err)
}
let x = platformBrowserDynamic()
let y = x.bootstrapModule(AppModule)
let f = myError
y.catch(f)
*/