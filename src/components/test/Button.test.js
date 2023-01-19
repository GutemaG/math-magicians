import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Testing button rendered correctly', () => {
  it('Button rendered', () => {
    const tree = renderer.create(
      <Button value="AC" handleClick={() => {}} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
