import { Container } from './styled';

export const Radio = ({ children, name, value, handlePaymentMethodChange, isSelected }) => {


    const handleChange = () => {
        handlePaymentMethodChange(value);
    };

    return (
        <Container onClick={handleChange}  data-state={isSelected}>
            <input
                type="radio"
                name={name}
                value={value}
                id={value}      
            />
                {children}
        </Container>
    );
};