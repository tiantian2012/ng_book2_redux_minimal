import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent  } from './app/app';
import { AppStore } from './app/app-store';
import { createStore, Store, StoreEnhancer } from 'redux';
import { AppState } from './app/app-state';
import { counterReducer } from './app/counter-reducer';

// import { HTTP_PROVIDERS,XHRBackend } from '@angular/http';
if (process.env.ENV === 'production') {
  enableProdMode();
}
// bootstrap(AppComponent, [
//   APP_ROUTER_PROVIDERS,
//   HTTP_PROVIDERS,
//   {provide:XHRBackend,useClass:InMemoryBackendService},
//   {provide:SEED_DATA,useClass:InMemoryDataService}
// ]);

let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  counterReducer,
  devtools
);
bootstrap(AppComponent, [
  provide(AppStore, { useValue: store })
])
  .catch((err: any) => console.error(err));


require('./app/app-store');
require('./app/app-state');
require('./app/counter-reducer');
require('./app/counter-action-creators');
require('./app/CounterComponent');