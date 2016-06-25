class PropertyCardController {
  constructor() {
  	// Check the state from binding and decide the label for button
    this.actionLabel = this.state == 'result' ? 'Add Property' : 'Remove Property';
  }
}

export default PropertyCardController;
