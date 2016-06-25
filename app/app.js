import angular from 'angular';
import propertyCard from './property-card/property-card.js'

angular
	.module('app', [])
	.component('propertyCard', propertyCard);