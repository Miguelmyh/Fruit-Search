describe('should verify correctness',() =>{
    it('should create an array with all of the possible values',() => {
        expect(search('banana')).toEqual(['Banana']);
        expect(search('apple')).toEqual(['Apple', "Custard apple", "Pineapple"]);
    });
    // it('should call search function', () => {
    //     searchHandler(e);
    //     expect(search(userInput)).toHaveBeenCalled();
    // })
    // it(,()=> {

    // })
})