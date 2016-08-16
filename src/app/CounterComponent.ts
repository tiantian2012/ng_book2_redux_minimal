import { Component, Inject } from '@angular/core';
import {Store} from 'redux';
import {AppStore} from './app-store';
import {AppState} from './app-state';
import * as CounterActions from './counter-action-creators';
import 'bootstrap/dist/css/bootstrap.min.css'

@Component({
    selector: 'counter-component',
    directives: [],
    template: `

        <div class="container row">
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <div class="caption">
                        <h3>Counter</h3>
                        <p>Custom Store</p>

                        <p>
                            The counter value is:
                            <b>{{ counter }}</b>
                        </p>

                        <p>
                            <button (click)="increment()"
                                class="btn btn-primary">
                                Increment
                            </button>
                            <button (click)="decrement()"
                                class="btn btn-default">
                                Decrement
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class CounterComponent {
    counter: number;

    constructor( @Inject(AppStore) private store: Store<AppState>) {
        store.subscribe(()=>this.readState());
        this.readState();
    }

    readState(){
        let state:AppState = this.store.getState() as AppState;
        this.counter = state.counter;
    }

    increment(){
        this.store.dispatch(CounterActions.increment());
    }

    decrement(){
        this.store.dispatch(CounterActions.decrement());
    }
}