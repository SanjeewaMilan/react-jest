import Async from './Async';
import { render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Async component',()=>{
    test('renders hello world as a text',async ()=>{
        //Arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async ()=>[{id:'p1', title:'First post'}]
        });
        render(<Async/>);
    
        //Act
    
        //Assert
        const element =await  screen.findAllByRole('listitem');
        expect(element).not.toHaveLength(0);
    });
});
