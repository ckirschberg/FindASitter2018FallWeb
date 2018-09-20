import { Injectable } from '@angular/core';
import { Sitter } from './entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  sitters: Sitter[] = [
    {
      sitterId: '1', 
      email: 'sitter1@sitter.dk', 
      birthDate: new Date(2000, 0, 1), 
      gender: 'female', 
      firstname: 'Hanne', 
      lastname: 'Hansen', 
      education: 'none', 
      // picture: '', 
      description: "I don't hurt children", 
      location: 'Copenhagen', 
      phone: '12345678',
      rating: [
        {
          parentId: 's1', 
          rating: 5, 
          description: "She did not hurt my child"
        }, 
        {
          parentId: 's2', 
          rating: 1, 
          description: "She did hurt my child"
        }],
        schedule: undefined
      },
      {
        sitterId: '2', 
        email: 'sitter2@sitter.dk', 
        birthDate: new Date(1979, 1, 1), 
        gender: 'male', 
        firstname: 'Christian', 
        lastname: 'Kirschberg', 
        education: 'PBA Web Development', 
        description: "I have two children", 
        location: 'Hillerød', 
        phone: '87654321',
        rating: [
          {
            parentId: 's1', 
            rating: 4, 
          }, 
          {
            parentId: 's2', 
            rating: 4, 
          }],
          schedule: undefined
        },
        {
          sitterId: '3', 
          email: 'sitter3@sitter.dk', 
          birthDate: new Date(2001, 4, 7), 
          gender: 'male', 
          firstname: 'Per', 
          lastname: 'Jensen', 
          education: 'Nurse', 
          // description: "", 
          location: 'Copenhagen', 
          phone: '4322i1u13u',
          rating: [
            {
              parentId: 's1', 
              rating: 5, 
            }, 
            {
              parentId: 's2', 
              rating: 3, 
            }],
            schedule: undefined
          }
  ];

  constructor() { }
}
