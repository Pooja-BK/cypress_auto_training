describe('Sample Automation', () => {
    
    it('Working with GET API - List User', () => {
    //using request to test API along with the method GET
        cy.request('GET','https://reqres.in/api/users?page=2').then((response) =>{
        //assert response
            expect(response.status).equal(200)
        //assert value of email from response
            expect(response.body.data[1].email).equal('lindsay.ferguson@reqres.in')

        })
    })

    it('Working with POST API - Create User', () => {
    //assign value to a variable
        var user = {
            "name": "Pooja",
            "job": "QA"
        }
    //using request to test API along with the method POST
        cy.request('POST','https://reqres.in/api/users',user).then((response) =>{
        //assert response 
            expect(response.status).equal(201)
        //assert name from user variable
            expect(response.body.name).equal(user.name)
        //assert job from user variable
            expect(response.body.job).equal(user.job)

        })
    })

    it('Working with PUT API - Update User', () => {
    //assign value to a variable
        var user1 = {
            "name": "Tester1",
            "job": "Testing"
        }
    //using request to test API along with the method PUT
        cy.request('PUT','https://reqres.in/api/users/2',user1).then((response) =>{
        //assert response   
            expect(response.status).equal(200)
        //assert name from user1 variable  
            expect(response.body.name).equal(user1.name)
        //assert job from user1 variable
            expect(response.body.job).equal(user1.job)

        })
    })

    it('Working with DELETE API - Delete User', () => {
    //using request to test API along with the method DELETE
        cy.request('DELETE','https://reqres.in/api/users/2').then((response) =>{
        //assert response
            expect(response.status).equal(204)

        })
    })

  })