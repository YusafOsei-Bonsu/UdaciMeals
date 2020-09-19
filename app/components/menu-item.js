import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['menu-item'],
    tagName: 'li',
    actions: {
        changeCategory(category) {
            this.set('mealCategory', category);
        },
        chooseItem(menuItemName) {
            this.get('orderManager').chooseMenuOption(this.get('mealCategory'), menuItemName);
        }
    }
});