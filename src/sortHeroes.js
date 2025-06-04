 export default function sortHeroes(heroes) {
      if (!Array.isArray(heroes)) {
        throw new Error('Input must be an array of heroes.');
      }

      return heroes.slice().sort((a, b) => b.health - a.health); // .slice() создает копию массива
    }