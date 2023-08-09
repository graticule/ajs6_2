import getAttacks from '../getAttacks';

test.each([
  [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 25,
      defence: 25,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    },
    [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ],
  ],
  [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 25,
      defence: 25,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          description: 'Нокаутирующий удар парализует противника',
        },
      ],
    },
    [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Нокаутирующий удар парализует противника',
      },
    ],
  ],
  [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 25,
      defence: 25,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    },
    [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ],
  ],
])('Test', (obj, result) => {
  expect(getAttacks(obj)).toEqual(result);
});
