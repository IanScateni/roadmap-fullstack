import { findHeroById } from './services/hero.services';

const hero = findHeroById( 1 ); 

console.log( hero?.name ?? 'No hero found' ); 
