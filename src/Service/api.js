export function loadLists() {
    return [
      { 
        title: 'Test1', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Bu bir sürükle bırak uygulamasıdır.',
            labels: ['#7159c1'],
            user: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Emilia_Clarke_by_Gage_Skidmore_2_%28cropped%29.jpg'
          },
          {
            id: 2,
            content: 'Bu bir sürükle bırak uygulamasıdır.Takipte kalmaya devam ediniz',
            labels: ['#7159c1'],
            user: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Emilia_Clarke_by_Gage_Skidmore_2_%28cropped%29.jpg'
          },
          {
            id: 3,
            content: 'Bu bir sürükle bırak uygulamasıdır.',
            labels: ['#7159c1'],
            user: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Emilia_Clarke_by_Gage_Skidmore_2_%28cropped%29.jpg'
          },
          {
            id: 4,
            content: 'Bu bir sürükle bırak uygulamasıdır. React ile kalın esen kalın :)"',
            labels: ['#54e1f7'],
            user: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Emilia_Clarke_by_Gage_Skidmore_2_%28cropped%29.jpg'
          },
          {
            id: 5,
            content: 'Bu bir sürükle bırak uygulamasıdır. :))',
            labels: ['#54e1f7'],
            user: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Emilia_Clarke_by_Gage_Skidmore_2_%28cropped%29.jpg'
          },
        ]
      },
      { 
        title: 'Test2', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Bu bir sürükle bırak uygulamasıdır.',
            labels: [],
            user: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Emilia_Clarke_by_Gage_Skidmore_2_%28cropped%29.jpg'
          }
        ]
      },
      { 
        title: 'Test3', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Bu bir sürükle bırak uygulamasıdır.',
            labels: ['#7159c1'],
            user: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Emilia_Clarke_by_Gage_Skidmore_2_%28cropped%29.jpg'
          },
          {
            id: 8,
            content: 'Bu bir sürükle bırak uygulamasıdır. React ile kalın esen kalın.',
            labels: ['#54e1f7'],
            user: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Emilia_Clarke_by_Gage_Skidmore_2_%28cropped%29.jpg'
          },
          {
            id: 9,
            content: 'Sürükle bırak uygulaması',
            labels: [],
          }
        ]
      },
      { 
        title: 'Test4', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Bu bir sürükle bırak uygulamasıdır.',
            labels: [],
          },
          {
            id: 12,
            content: 'Bu bir sürükle bırak uygulamasıdır. React ile kalın esen kalın.',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Bu bir sürükle bırak uygulamasıdır.Takipte kalmaya devam ediniz. React ile kalın esen kalın."',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }