import { getParameter, getEncryptedParameter } from '../src/index'

describe('test internals', () => {
  test('definition', () => {
    expect(getParameter).toBeDefined()
    expect(getEncryptedParameter).toBeDefined()
  })
})
