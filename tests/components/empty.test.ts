import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('Empty', () => {
    let component;

    beforeEach(() => {
        component = StageComponent
            .withResources('../../src/components/empty')
            .inView('<empty></empty>')
            .boundTo({ firstName: 'Bob' });
    });

    it('should render', done => {
        component.create(bootstrap).then(() => {
            //const nameElement = document.querySelector('.firstName');
            //expect(nameElement.innerHTML).toBe('Bob');
            const element = document.querySelector("empty")
            expect(element.innerHTML).toBe("")
            done();
        }).catch(e => { console.log(e.toString()) });
    });

    afterEach(() => {
        component.dispose();
    });
});
