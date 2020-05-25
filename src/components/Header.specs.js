import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import Header from './Header'

const setup = () => {
  const props = {
    getAll: jest.fn()
  }

  const renderer = createRenderer();
  renderer.render(<Header {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render correctly', () => {
      const { output } = setup()
      expect(output.type).toBe('header')
      expect(output.props.className).toBe('header')

      const [ h1, input ] = output.props.children
      expect(h1.type).toBe('h1')
      expect(h1.props.children).toBe('heroes')
      expect(input.props.placeholder).toBe('What needs to be done?')
    })
  })
})
