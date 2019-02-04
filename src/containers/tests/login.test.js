(() =>
{
    expect(tree).toBeDefined();
});
    it('creat props from state',() =>{
        const initialLoginValue ={
            loggedInValue : false
        }
        expect(mapStateToProps(initialLoginValue).loggedInValue).toEqual(false);
    });
    it('to check count of div',() =>
{
    expect(tree. find('div').length).tobe(10);
});
//     describe('to handle submit request',() =>
// {   
//     it('if username and password enetered are correct',() =>
// {   const handleSubmit = jest.fn();
//     const username = "Test@gmail.com";
//     const password="Test@123";
//     const result = tree.instance().handleSubmit();
//     expect(
// });
   
describe('handle password',() =>
{
    it('to set the password', ()=>
{
    expect(tree.instance().handlePassword("Test@123"));
});
});
describe('handle Username',() =>
{
    it('to set the Username', ()=>
{
    expect(tree.instance().handleUsername("Test@gmail.com"));
});
});