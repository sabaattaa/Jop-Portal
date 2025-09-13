import Button from '@/components/button'
import { render, screen } from '@testing-library/react'
 

test('Button renders with correct text', () => {
  render(<Button title="Click Me" />)

  // check that the button is in the document
  expect(screen.getByText('Click Me')).toBeInTheDocument()
})
