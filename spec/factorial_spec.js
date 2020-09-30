describe('Факториал', function () {
  describe('Тестирование итерационного подсчета факториала', function () {
    it('Функция должна вернуть 120', function () {
      expect(fak(5)).toEqual(120);
    });
  });
  describe('Тестирование рекурсивного подсчета факториала', function () {
    it('Функция должна вернуть 24', function () {
      expect(fakRekus(4)).toEqual(24);
    });
  });
});
