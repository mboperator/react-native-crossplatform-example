const exampleData = [
  {
    id: '1',
    name: 'Marcus B.',
  },
  {
    id: '2',
    name: 'Jasmine K.',
  },
  {
    id: '3',
    name: 'Austin B.',
  },
  {
    id: '4',
    name: 'Michael H.',
  },
  {
    id: '5',
    name: 'Remy Y.',
  },
  {
    id: '6',
    name: 'Faris M.',
  },
  {
    id: '6',
    name: 'Kyle E.',
  },
];

export function fetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: exampleData });
    }, 300);
  });
}
