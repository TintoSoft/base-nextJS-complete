import { Button } from 'components/atoms/Button';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('render components', () => {
    const { getByText } = render(<Button />);

    const button = getByText('Boton');

    expect(button).toBeInTheDocument();
  });
});
