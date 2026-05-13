import{test,expect, request} from '@playwright/test'
test.describe('api testing',()=>{

    //post method
    test('post api test',async({request})=>{
        const response=await request.post('https://jsonplaceholder.typicode.com/posts',{
            data:{
                title:"API TESTING",
                body:"Post method check",
                id:101,
            }
        })
        expect(response.status()).toBe(201)
        const result=await response.json()

        console.log(result)

        expect(result.title).toBe("API TESTING")
        expect(result.body).toBe("Post method check")
    })
    //put method
    test.only('put api test',async({request})=>{
        const response=await request.put('https://jsonplaceholder.typicode.com/posts/101',{
            data:{
                id:101,
                title :"updated api test",
                body:"put method test"
            }
        })
        expect(response.status()).toBe(200)
        const updatedresult=await response.json()
        console.log(updatedresult)
        expect(updatedresult.title).toBe("updated api test")
         expect(updatedresult.body).toBe("put method test")
    })
    //patch method
    test('patch api testing',async({request})=>{
        const response=await request.patch('https://jsonplaceholder.typicode.com/posts/101',{
            data:{
                title:"Partial updated api test"
            }
        })
        expect(response.status()).toBe(200)
        const partialupdated=await response.json()
        console.log(partialupdated)
        expect(partialupdated.title).toBe("Partial updated api test")
    })
    //delete api test


    test('delete api testing',async({request})=>{
        const response=await request.delete('https://jsonplaceholder.typicode.com/posts/101')
        expect(response.status()).toBe(200)
        const deleteresponse=await response.json()
        console.log(deleteresponse)
        expect(deleteresponse).toEqual({})



    })
    test('api for put',async({request})=>{
        const response=await request.post('https://jsonplaceholder.typicode.com/posts')
           expect(response.status()).toBe(201)
           const postreq=await response.json()
           console.log(postreq)
           await(postreq)

        })
    })


})