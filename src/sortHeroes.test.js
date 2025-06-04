 import sortHeroes from './sortHeroes';

    describe('sortHeroes', () => {
      it('should sort heroes by health in descending order', () => {
        const heroes = [
          { name: 'мечник', health: 10 },
          { name: 'маг', health: 100 },
          { name: 'лучник', health: 80 },
        ];
        const expected = [
          { name: 'маг', health: 100 },
          { name: 'лучник', health: 80 },
          { name: 'мечник', health: 10 },
        ];
        expect(sortHeroes(heroes)).toEqual(expected);
      });

      it('should return a new array without modifying the original', () => {
          const heroes = [
              { name: 'мечник', health: 10 },
              { name: 'маг', health: 100 },
              { name: 'лучник', health: 80 },
          ];
          const sortedHeroes = sortHeroes(heroes);
          expect(heroes).not.toBe(sortedHeroes); // Проверяем, что это разные объекты
          expect(heroes).toEqual([
              { name: 'мечник', health: 10 },
              { name: 'маг', health: 100 },
              { name: 'лучник', health: 80 },
          ]); // Проверяем, что исходный массив не изменился
      });

      it('should handle an empty array', () => {
        expect(sortHeroes([])).toEqual([]);
      });

      it('should handle heroes with the same health', () => {
        const heroes = [
          { name: 'мечник', health: 80 },
          { name: 'маг', health: 80 },
          { name: 'лучник', health: 80 },
        ];
        const expected = [
          { name: 'мечник', health: 80 },
          { name: 'маг', health: 80 },
          { name: 'лучник', health: 80 },
        ];
        expect(sortHeroes(heroes)).toEqual(expected);
      });

      it('should throw an error if the input is not an array', () => {
        expect(() => sortHeroes('not an array')).toThrow('Input must be an array of heroes.');
      });

    });