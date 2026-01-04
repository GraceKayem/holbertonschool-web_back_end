import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }

    this._floors = floors;
  }

  // Methods
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }

  // Getters
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }
}