module.exports = db => {
  const posts = [
    {
      author: 'Molina Fulton',
      content:
        'Ut quis proident ipsum ipsum fugiat reprehenderit esse ut. Aliqua est tempor ipsum exercitation quis nostrud sit adipisicing mollit magna duis Lorem. Ut et proident voluptate aute voluptate voluptate anim irure et Lorem culpa non voluptate. Aliqua ea ullamco nostrud id quis officia in eiusmod eiusmod labore aliqua quis duis ad. Elit et elit sunt exercitation sunt nisi incididunt amet amet. Pariatur nulla eiusmod minim fugiat commodo id enim duis occaecat.\r\n',
      title:
        'Deserunt nulla ipsum ea occaecat commodo aliqua nostrud proident pariatur.',
      createdAt: new Date(2017, 9, 5),
      votes: 1
    },
    {
      author: 'Ellis Daniel',
      content:
        'Ullamco eu veniam nostrud id aliquip consequat. Amet ut incididunt nisi ipsum eu esse elit. Consectetur elit qui nostrud pariatur nostrud qui laborum qui ea labore est tempor in.\r\n',
      title:
        'Quis cillum nisi elit tempor incididunt et deserunt ut eiusmod ullamco sunt consectetur.',
      createdAt: new Date(2017, 7, 5),
      votes: 3
    },
    {
      author: 'Ivy Mack',
      content:
        'Voluptate culpa id commodo quis occaecat irure adipisicing. Aliquip exercitation consectetur qui magna dolore laborum. Consequat non tempor nulla laborum. Dolor eu dolore dolor pariatur deserunt aute veniam non enim deserunt aute et. Mollit aliquip velit anim mollit labore velit et minim mollit sint velit in duis do. Ullamco nulla duis eiusmod elit.\r\n',
      title: 'Eu in et nulla proident veniam reprehenderit veniam.',
      createdAt: new Date(2017, 6, 5),
      votes: 2
    },
    {
      author: 'Farrell Ingram',
      content:
        'Laboris nisi occaecat laborum fugiat elit ipsum Lorem qui proident qui. Dolor dolor sit magna eiusmod cillum qui minim aliquip deserunt sint deserunt velit. Voluptate ea exercitation ex do magna. Mollit est consequat deserunt et quis consequat commodo duis sit nisi. Incididunt et nisi est adipisicing incididunt reprehenderit in sunt excepteur in.\r\n',
      title:
        'Laboris eiusmod consequat in eiusmod eiusmod excepteur aliquip occaecat cupidatat irure adipisicing.',
      createdAt: new Date(2017, 6, 5),
      votes: 5
    },
    {
      author: 'Avis Whitley',
      content:
        'Ut laborum reprehenderit dolore est commodo enim aliquip officia commodo proident dolor quis reprehenderit eu. Commodo excepteur et sunt ullamco commodo sunt non velit ut. Irure quis consequat in aliqua nulla do aliquip mollit aute commodo reprehenderit.\r\n',
      title:
        'Quis sunt reprehenderit et excepteur ipsum proident excepteur enim et ad eu.',
      createdAt: new Date(2017, 11, 5),
      votes: 2
    },
    {
      author: 'Walters Spencer',
      content:
        'Laborum aliqua nulla Lorem esse voluptate proident qui nostrud pariatur nostrud fugiat dolor. Id ea anim cupidatat occaecat officia culpa deserunt voluptate. Nulla sit irure reprehenderit incididunt enim enim occaecat nostrud id et deserunt nostrud duis ad.\r\n',
      title: 'Est esse incididunt aliquip proident aute esse et.',
      createdAt: new Date(2017, 12, 5),
      votes: 1
    },
    {
      author: 'Sheri Calderon',
      content:
        'Est laborum proident irure esse aute et dolor laborum nostrud elit non eu do magna. Duis enim est cillum in nisi. Mollit reprehenderit Lorem quis deserunt dolor. Veniam eiusmod ut non qui incididunt et et cupidatat. Veniam sunt nostrud minim eu non elit aute. In consectetur sit eu deserunt cillum qui fugiat velit consequat Lorem ut et veniam sunt.\r\n',
      title: 'Aliqua exercitation nisi sunt mollit Lorem sint enim.',
      createdAt: new Date(2017, 10, 5),
      votes: 3
    }
  ]

  posts.forEach(post => db.posts.insert(post))
}
