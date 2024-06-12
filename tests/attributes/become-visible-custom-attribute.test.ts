import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('become-visible', () => {
    let component;

    beforeEach(() => {
        component = StageComponent
            .withResources('../../src/attributes/become-visible-custom-attribute.ts')
            .inView('<div become-visible.bind="visible">Bob</div>')
            .boundTo({ color: 'blue' });
    });

    it('should set the background color to provided color', done => {
        component.create(bootstrap).then(() => {
            expect(component.element.style.backgroundColor).toBe('blue');
            done();
        }).catch(e => console.log(e.toString()));
    });

    afterEach(() => {
        component.dispose();
    });
});
