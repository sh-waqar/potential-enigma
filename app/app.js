import angular from 'angular';
import propertyList from './property-list/property-list.js'
import propertyCard from './property-card/property-card.js'

angular
	.module('propetyApp', [])
	.component('propertyList', propertyList)
	.component('propertyCard', propertyCard);