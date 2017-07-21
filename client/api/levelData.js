var levelData = [
  {
    id: 'A',
    title: 'Basics',
    description: 'In this lesson you will learn about REGEX Basics',
    picture: 'https://cdn.pixabay.com/photo/2017/01/03/22/53/sunrise-1950873_1280.jpg',
    techniques: [
      { id: 'A1', meta: '*', description: 'Match preceding character 0 or more times' },
      { id: 'A2', meta: '+',  description: 'Match preceding character 1 or more times' },
      { id: 'A3', meta: '.', description: 'Match any single character' },
      { id: 'A4', meta: 'x|y', description: "Match either 'x' or 'y'" },
      { id: 'A5', meta: '\\', description: 'Escape a special character' },
      { id: 'A6', meta: 'b', description: 'The character b' },
      { id: 'A7', meta: 'abc', description: 'The string abc' },
    ],
    opponent: {
      spar: {
        name: 'Training Partner',
        img: '/images/classmate-200.svg'
      },
      fight: {
        name: 'Bad Guy',
        img: '/images/enemy-200.svg'        
      }
    }
  },
  {
    id: 'B',
    title: 'Character Classes',
    description: 'In this lesson you will learn about REGEX Character Classes',
    picture: 'https://cdn.pixabay.com/photo/2016/03/21/10/44/desert-1270345_1280.jpg',
    techniques: [
      { id: 'B1', meta: '\\d', description: 'Match a digit character' },
      { id: 'B2', meta: '\\D', description: 'Match a non-digit character' },
      { id: 'B3', meta: '\\s', description: 'Match a single white space character (space, tab, form feed, or line feed' },
      { id: 'B4', meta: '\\S', description: 'Match a single character other than white space' },
      { id: 'B5', meta: '\\w', description: 'Match any alphanumeric character (including underscore)' },
      { id: 'B6', meta: '\\W', description: 'Match any non-word character '},
    ],
    opponent: {
      spar: {
        name: 'Training Partner',
        img: '/images/classmate-200.svg'
      },
      fight: {
        name: 'Bad Guy',
        img: '/images/enemy-200.svg'        
      }
    }
  },
  {
    id: 'C',
    title: 'Character Classes II',
    description: 'In this lesson you will learn about REGEX Character Classes II',
    picture: 'https://cdn.pixabay.com/photo/2013/02/03/19/24/sunrise-77677_1280.jpg',
    techniques: [
      { id: 'C1', meta: '[abc]', description: "Match any one of the characters in the set 'abc'" },
      { id: 'C2', meta: '[^abc]', description: "Match anything not in character set 'abc'" },
      { id: 'C3', meta: '[\\b]', description: 'Match a backspace' },
    ],
    opponent: {
      spar: {
        name: 'Training Partner',
        img: '/images/classmate-200.svg'
      },
      fight: {
        name: 'Bad Guy',
        img: '/images/enemy-200.svg'        
      }
    }
  },
  {
    id: 'D',
    title: 'Assertions',
    description: 'In this lesson you will learn about REGEX Assertions',
    picture: 'https://cdn.pixabay.com/photo/2016/11/18/16/04/tree-1835529_1280.jpg',
    techniques: [
      { id: 'D1', meta: '^', description: 'Match beginning of input' },
      { id: 'D2', meta: '$', description: 'Match end of input' },
      { id: 'D3', meta: '\\b', description: 'Match a word boundary' },
      { id: 'D4', meta: '\\B', description: 'Match a non-word boundary' },
      { id: 'D5', meta: '?=', description: 'Lookahead' },
      { id: 'D6', meta: '?!', description: 'Negative lookahead' },
    ],
    opponent: {
      spar: {
        name: 'Training Partner',
        img: '/images/classmate-200.svg'
      },
      fight: {
        name: 'Bad Guy',
        img: '/images/enemy-200.svg'        
      }
    }
  },
  {
    id: 'E',
    title: 'Assertions II',
    description: 'In this lesson you will learn about REGEX Assertions II',
    picture: 'https://cdn.pixabay.com/photo/2016/05/02/17/05/nature-1367681_1280.jpg',
    techniques: [
      { id: 'E1', meta: '?<=', description: 'Lookbehind' },
      { id: 'E2', meta: '?<!', description: 'Negative lookbehind' },
      { id: 'E3', meta: '?>', description: 'Once-only subexpression' },
      { id: 'E4', meta: '?()', description: 'If then condition' },
      { id: 'E5', meta: '?()|', description: 'If then else condition' },
      { id: 'E6', meta: '?#', description: 'Comment' },
    ],
    opponent: {
      spar: {
        name: 'Training Partner',
        img: '/images/classmate-200.svg'
      },
      fight: {
        name: 'Bad Guy',
        img: '/images/enemy-200.svg'        
      }
    }
  },
  {
    id: 'F',
    title: 'Quantifiers',
    description: 'In this lesson you will learn about REGEX Quantifiers',
    picture: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/patagonia-1581878_1280.jpg',
    techniques: [
      { id: 'F1', meta: '{n}', description: 'Match exactly n occurrences of preceding character' },
      { id: 'F2', meta: '{n,m}', description: 'Match at least n and at most m occurrences of the preceding character' },
      { id: 'F3', meta: '?', description: 'Match 0 or 1' },
    ],
    opponent: {
      spar: {
        name: 'Training Partner',
        img: '/images/classmate-200.svg'
      },
      fight: {
        name: 'Bad Guy',
        img: '/images/enemy-200.svg'        
      }
    }
  },
  {
    id: 'G',
    title: 'Special Characters',
    description: 'In this lesson you will learn about REGEX Special Characters',
    picture: 'https://cdn.pixabay.com/photo/2014/11/13/23/33/glacier-530050_1280.jpg',
    techniques: [
      { id: 'G1', meta: '\\cX', description: 'Match control character X in a string' },
      { id: 'G2', meta: '\\n', description: 'Match a line feed' },
      { id: 'G3', meta: '\\r', description: 'Match a carriage return' },
      { id: 'G4', meta: '\\t', description: 'Match a tab' },
      { id: 'G5', meta: '\\0', description: 'Match a NULL' },    
    ],
    opponent: {
      spar: {
        name: 'Training Partner',
        img: '/images/classmate-200.svg'
      },
      fight: {
        name: 'Bad Guy',
        img: '/images/enemy-200.svg'        
      }
    }
  },
  {
    id: 'H',
    title: 'Special Characters II',
    description: 'In this lesson you will learn about REGEX Special Characters II',
    picture: 'https://cdn.pixabay.com/photo/2016/06/17/00/27/seven-sisters-1462388_1280.jpg',
    techniques: [
      { id: 'H1', meta: '\\f', description: 'Match a form feed' },
      { id: 'H2', meta: '\\v', description: 'Match a vertical tab' },
      { id: 'H3', meta: '\\xhh', description: 'Match character with code hh (2 hex digits)' },
      { id: 'H4', meta: '\\uhhhh', description: 'Match character with code hhhh (4 hex digits)' },
    ],
    opponent: {
      spar: {
        name: 'Training Partner',
        img: '/images/classmate-200.svg'
      },
      fight: {
        name: 'Bad Guy',
        img: '/images/enemy-200.svg'        
      }
    }
  },
  {
    id: 'I',
    title: 'Flags',
    description: 'In this lesson you will learn about REGEX Flags',
    picture: 'https://cdn.pixabay.com/photo/2016/03/19/00/59/seven-sisters-1266043_1280.jpg',
    techniques: [
      { id: 'I1', meta: 'g', description: 'Global search' },
      { id: 'I2', meta: 'i', description: 'Case-insensitive search' },
      { id: 'I3', meta: 'm', description: 'Multi-line search' },
      { id: 'I4', meta: 'y', description: '"sticky" search match starting at current position in target string' },
    ],
    opponent: {
      spar: {
        name: 'Training Partner',
        img: '/images/classmate-200.svg'
      },
      fight: {
        name: 'Bad Guy',
        img: '/images/enemy-200.svg'        
      }
    }
  },       
  {
    id: 'J',
    title: 'Groups',
    description: 'In this lesson you will learn about REGEX Groups',
    picture: 'https://cdn.pixabay.com/photo/2012/01/09/11/22/the-pleiades-star-cluster-11637_1280.jpg',
    techniques: [
      { id: 'J1', meta: '(x)', description: "Match 'x' and remember the match" },
      { id: 'J2', meta: '(?:x)', description: "Match 'x' but do not remember the match" },
      { id: 'J3', meta: '\\n', description: 'A back reference to the last substring matching the n parenthetical in the regex' },
    ],
    opponent: {
      spar: {
        name: 'Training Partner',
        img: '/images/classmate-200.svg'
      },
      fight: {
        name: 'Bad Guy',
        img: '/images/enemy-200.svg'        
      }
    }
  }           
];

export default levelData;