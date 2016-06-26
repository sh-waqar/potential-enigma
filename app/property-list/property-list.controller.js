import data from './mockData';

class PropertyListController {
  constructor() {
    this.propertiesResults = data.results;
    this.propertiesSaved = data.saved;
  }

  addProperty(item) {
    // Check the exsistance of the selected item 
    // in the saved items array
    if (this.propertiesSaved.indexOf(item) > -1) {
      return false;
    }
    // Add the selected item in saved list
    this.propertiesSaved.push(item);
  }

  removeProperty(idx) {
    // Remove the selected item from saved list
    this.propertiesSaved.splice(idx, 1);
  }
}

export default PropertyListController;
