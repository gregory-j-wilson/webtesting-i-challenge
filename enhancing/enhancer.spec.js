const enhancer = require('./enhancer.js');

describe('enhancer functions', () => {

    describe('repair function', () => {

        it('restores durability to 100', function() {

            const item = {
                name: 'Bow and arrow',
                durability: 90,
                enhancement: 20
            }

            const result = enhancer.repair(item) 

            expect(result.durability).toBe(100)
        })

    })


    describe('success function', () => {

        it('enhancement of item increases by 1', function () {

            const item = {
                name: 'Bow and arrow',
                durability: 90,
                enhancement: 15
            }

            const result = enhancer.success(item)

            console.log(result.enhancement)

            expect(result.enhancement).toBe(16)

        })

        it('enhancement does not get bigger than 20', function () {

            const item = {
                name: 'Bow and arrow',
                durability: 90,
                enhancement: 20
            }

            const result = enhancer.success(item)

            console.log(result.enhancement)

            expect(result.enhancement).toBe(20)

        })

        it('durability does not change', function () {

            const item = {
                name: 'Bow and arrow',
                durability: 90,
                enhancement: 20
            }

            const result = enhancer.success(item)


            expect(result.durability).toBe(90)

        })


    })


    describe('fail function', () => {

        it('decreases durability by 5, if enhancement is less than 15', function () {

            const item = {
                name: 'Bow and arrow',
                durability: 90,
                enhancement: 14
            }

            const result = enhancer.fail(item)


            expect(result.durability).toBe(85)

        })

        it('decreases durability by 10, if enhancement is greater than or equal to 15', function () {

            const item = {
                name: 'Bow and arrow',
                durability: 90,
                enhancement: 15
            }

            const result = enhancer.fail(item)


            expect(result.durability).toBe(80) 

        })

        it('decreases enhancement by 1, if enhancement is greater than 16', function () {

            const item = {
                name: 'Bow and arrow',
                durability: 90,
                enhancement: 18
            }

            const result = enhancer.fail(item)


            expect(result.enhancement).toBe(17) 

        })

  

    })

})
