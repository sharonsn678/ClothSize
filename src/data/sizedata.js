import Category from '../models/category';
import SizeItem from '../models/sizeItem';

export const CATEGORIES = [
  new Category('c1', 'United State'),
  new Category('c2', 'United Kingdom'),
  new Category('c5', 'Europe'),
  new Category('c3', 'Canada'),
  new Category('c4', 'China'),
];

export const SIZEITEMS = [
  new SizeItem(
    's1',
    ['c1'],
    'CRIB',
    '36',
    '52',
    'in'
  ),
  new SizeItem(
    's2',
    ['c1'],
    'TWIN',
    '64',
    '89',
    'in'
  ),
  new SizeItem(
    's3',
    ['c1'],
    'TWIN-XL',
    '68',
    '90',
    'in'
  ),
  new SizeItem(
    's4',
    ['c1'],
    'FULL',
    '80',
    '89',
    'in'
  ),
  new SizeItem(
    's5',
    ['c1'],
    'QUEEN',
    '88',
    '90',
    'in'
  ),
  new SizeItem(
    's6',
    ['c1'],
    'QUEEN',
    '90',
    '94',
    'in'
  ),
  new SizeItem(
    's7',
    ['c1'],
    'JUMBO QUEUE',
    '102',
    '100',
    'in'
  ),
  new SizeItem(
    's8',
    ['c1'],
    'KING',
    '104',
    '90',
    'in'
  ),
  new SizeItem(
    's9',
    ['c1'],
    'JUMBO KING',
    '114',
    '100',
    'in'
  ),

  /// europe
  new SizeItem(
    's10',
    ['c2'],
    'BABY',
    '102',
    '135',
    'cm'
  ),
  new SizeItem(
    's11',
    ['c2'],
    'COT',
    '120',
    '150',
    'cm'
  ),
  new SizeItem(
    's12',
    ['c2'],
    'SINGLE',
    '135',
    '120',
    'cm'
  ),
  new SizeItem(
    's13',
    ['c2'],
    'LONG SINGLE',
    '135',
    '218'
  ),
  new SizeItem(
    's14',
    ['c2'],
    'L.SINGLE',
    '160',
    '218',
    'cm'
  ),
  new SizeItem(
    's15',
    ['c2'],
    'S.DOUBLE',
    '183',
    '218',
    'cm'
  ),
  new SizeItem(
    's16',
    ['c2'],
    'DOUBLE',
    '200',
    '200',
    'cm'
  ),
  new SizeItem(
    's17',
    ['c2'],
    'KING',
    '230',
    '220',
    'cm'
  ),
  new SizeItem(
    's18',
    ['c2'],
    'SUPERKIN',
    '260',
    '220',
    'cm'
  ),
  new SizeItem(
    's19',
    ['c2'],
    'EMPEROR',
    '290',
    '235',
    'cm'
  ),
  new SizeItem(
    's20',
    ['c2'],
    'UK CAESAR',
    '323',
    '237',
    'cm'
  ),
  new SizeItem(
    's21',
    ['c2'],
    'UK S. CAESAR',
    '348',
    '249',
    'cm'
  ),  
  new SizeItem(
    's22',
    ['c4'],
    'KiD',
    '150',
    '200',
    'cm'
  ),
  new SizeItem(
    's23',
    ['c4'],
    'KID XL',
    '160',
    '200',
    'cm'
  ),
  new SizeItem(
    's24',
    ['c4'],
    'TWIN ',
    '180',
    '200',
    'cm'
  ),
  new SizeItem(
    's25',
    ['c4'],
    'TWIN XL',
    '180',
    '210',
    'cm'
  ),
  new SizeItem(
    's26',
    ['c4'],
    'QUEEN',
    '200',
    '230',
    'cm'
  ),
  new SizeItem(
    's27',
    ['c4'],
    'KING',
    '220',
    '240',
    'cm'
  ),
  new SizeItem(
    's28',
    ['c3'],
    'CRIB',
    '36',
    '45',
    'in'
  ),
  new SizeItem(
    's29',
    ['c3'],
    'TWIN',
    '66',
    '86',
    'in'
  ),
  new SizeItem(
    's30',
    ['c3'],
    'DOUBLE',
    '80',
    '86',
    'in'
  ),
  new SizeItem(
    's31',
    ['c3'],
    'QUEEN',
    '90',
    '90',
    'in'
  ),
  new SizeItem(
    's32',
    ['c3'],
    'KING',
    '104',
    '90',
    'in'
  ),
  new SizeItem(
    's33',
    ['c3'],
    'SUPER KING',
    '112',
    '100',
    'in'
  ),
  new SizeItem(
    's34',
    ['c5'],
    'BABY',
    '80',
    '80',
    'cm'
  ),
  new SizeItem(
    's35',
    ['c5'],
    'TODDLER',
    '100',
    '135',
    'cm'
  ),
  new SizeItem(
    's36',
    ['c5'],
    'SINGLE',
    '135',
    '200',
    'cm'
  ),
  new SizeItem(
    's37',
    ['c5'],
    'L.SINGLE',
    '140',
    '200',
    'cm'
  ),
  new SizeItem(
    's38',
    ['c5'],
    'XL SINGLE',
    '155',
    '220',
    'cm'
  ),
  new SizeItem(
    's39',
    ['c5'],
    'DOUBLE',
    '200',
    '200',
    'cm'
  ),
  new SizeItem(
    's40',
    ['c5'],
    'KING',
    '240',
    '220',
    'cm'
  ),
  new SizeItem(
    's41',
    ['c5'],
    'L.KING',
    '260',
    '220',
    'cm'
  ),
  new SizeItem(
    's42',
    ['c5'],
    'EURO KING',
    '260',
    '240',
    'cm'
  ),
];