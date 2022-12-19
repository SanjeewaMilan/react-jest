import Greeting from './Greeting';
import { render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting component',()=>{
    test('renders hello world as a text',()=>{
        //Arrange
        render(<Greeting/>);
    
        //Act
    
        //Assert
        const element = screen.getByText('Hello World');
        expect(element).toBeInTheDocument();
    });


    test('renders good to see you if button not clicked',()=>{
        //Arrange
        render(<Greeting/>);
    
        //Act
        
        //Assert
        const element = screen.getByText('good to see you');
        expect(element).toBeInTheDocument();
    });


    
    test('renders changed if button clicked',()=>{
        //Arrange
        render(<Greeting/>);
    
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const element = screen.getByText('Text chnaged');
        expect(element).toBeInTheDocument();
    });

    test('not renders "good to see you" if button clicked',()=>{
        //Arrange
        render(<Greeting/>);
    
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const element = screen.queryByText('good to see you', {exact:false});
        expect(element).toBeNull();
    });
});
