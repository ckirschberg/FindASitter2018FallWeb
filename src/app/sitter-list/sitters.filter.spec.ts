import { FilterSitters } from './sitters.filter';
import { TestBed, async } from '@angular/core/testing';
import { Sitter } from '../entities/sitter';

// Valid data:
// 1.0: Searching for per should give me one result (lowercase searching)
// 1.1: Searching for Per should give me one result (correct capital letters)
// 1.2: Searching for PER should give me one result (all caps letters)

// 1.3: Searching for 'Per Hansen' should give me one result (fullname test)
// 1.4: Searching for 'Copen' should give me two objects (partial location)
// 1.5: Searching for 'Copenhagen' should give me two objects (exact location)

// 1.6: Searching for 'Per Copenhagen' should show one object (firstname and location at the same time)
// 1.7: Searching for 'Helle Copenhagen' should show 0 objects (firstname and location at the same time)
// 1.8: Searching for '' (empty string) should give us orignal array (no filtering.)

// Invalid data:
// 2.0: Test with no dataset (empty array), searching for 'Per'
// 2.1: Passing undefined as search parameter.
// 2.2: ...

describe('App: Sitters Filter', () => {
 

  beforeEach(() => {
   TestBed.configureTestingModule({
     declarations: [
       FilterSitters
     ],
   });  
  });
  
  it('1.0: Searching for per should give me one result (lowercase searching)', () => {
    // Arrage, Act, Assert
    let filter = new FilterSitters(); // Arrange
    let sitters = [
      {sitterId: '11', firstname: 'Per', lastname: 'Hansen', location: 'Copenhagen'},
      {sitterId: '11', firstname: 'Jens', lastname: 'Hansen', location: 'Copenhagen'},
      {sitterId: '12', firstname: 'Helle', lastname: 'Hansen', location: 'Aalborg'},
      {sitterId: '13', firstname: 'Jørgen', lastname: 'Hansen', location: 'Hillerød'},
      {sitterId: '14', firstname: 'Berit', lastname: 'Hansen', location: 'Vejle'},
    ];

    let result = filter.transform(sitters, 'per'); // Act
    expect(result.length).toBe(1); //Assert (Expect)
    expect(result[0].firstname).toBe('Per');
  });






 });
